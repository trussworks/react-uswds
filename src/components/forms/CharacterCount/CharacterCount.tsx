import React, { useState } from 'react'
import classnames from 'classnames'

import { TextInput, TextInputRef } from '../TextInput/TextInput'
import { Textarea, TextareaRef } from '../Textarea/Textarea'
import { FormGroup } from '../FormGroup/FormGroup'

interface CharacterCountProps {
  id: string
  name: string
  maxLength: number
  className?: string
  label?: React.ReactNode
  isTextArea?: boolean
  textRef?: // currently getting an error when adding this as ref
  | string
    | ((instance: HTMLInputElement | null) => void)
    | ((instance: HTMLTextAreaElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | React.RefObject<HTMLTextAreaElement>
    | null
    | undefined
}

export const CharacterCount = (
  props: CharacterCountProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
): React.ReactElement => {
  const {
    id,
    name,
    className,
    label,
    maxLength,
    isTextArea,
    textRef,
    type, // Conflicts with type attribute already set on TextInput component
    ...inputProps
  } = props

  const maxNum = maxLength === undefined ? 0 : maxLength

  /* Ideally defined as i18n translation strings */
  const messageContent = `You can enter up to ${maxLength} characters`
  const emptyMessageFormat = `${maxLength} characters allowed`
  const remainingPluralFormat = '$0 characters left'
  const remainingSingularFormat = '$0 character left'
  const overSingularFormat = '$0 character over limit'
  const overPluralFormat = '$0 characters over limit'

  const limitMessage = (len: number): string => {
    let limitMessage
    if (len === 0) {
      return emptyMessageFormat
    } else if (len <= maxNum) {
      switch (maxNum - len) {
        case 1:
          return remainingSingularFormat.replace('$0', '1')
        default:
          return remainingPluralFormat.replace('$0', (maxNum - len).toString())
      }
    } else {
      switch (len - maxNum) {
        case 1:
          return overSingularFormat.replace('$0', '1')
        default:
          return overPluralFormat.replace('$0', (len - maxNum).toString())
      }
    }
  }

  const [state, setState] = useState({
    characterLength: 0,
    limitMessage: emptyMessageFormat,
    invalidMessage: false,
  })

  const classes = classnames('usa-character-count__field', className)
  const messageClasses = classnames(
    'usa-hint',
    'usa-character-count__message',
    { 'usa-character-count__message--invalid': state.invalidMessage }
  )

  const messageId = id + '-info'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const len = e.target.value.length
    setState({
      characterLength: len,
      limitMessage: limitMessage(len),
      invalidMessage: len > maxLength,
    })
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement> &
      React.FocusEvent<HTMLTextAreaElement>
  ): void => {
    const validationMessage = state.invalidMessage
      ? 'The content is too long.'
      : ''
    e.target.setCustomValidity(validationMessage)
  }

  let inputComponent
  if (isTextArea) {
    const ref = textRef as TextareaRef
    // How will we know if the label or hint has an id value should we add it to the describedby?
    inputComponent = (
      <Textarea
        id={id}
        data-testid="characterCountInput"
        name={name}
        className={classes}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-describedby={messageId}
        inputRef={ref}
        {...inputProps}></Textarea>
    )
  } else {
    const ref = textRef as TextInputRef
    inputComponent = (
      <TextInput
        id={id}
        data-testid="characterCountInput"
        name={name}
        type="text"
        className={classes}
        onChange={handleChange}
        onBlur={handleBlur}
        inputRef={ref}
        {...inputProps}
      />
    )
  }

  return (
    <>
      {/* Moves maxlength attribute off of input so it is not a hard entry limit */}
      <div className="usa-character-count" data-maxlength={maxLength}>
        <FormGroup>
          {label}
          {inputComponent}
        </FormGroup>
        <noscript>{messageContent}</noscript>
        <span id={messageId} className={messageClasses} aria-live="polite">
          {state.limitMessage}
        </span>
      </div>
    </>
  )
}

export default CharacterCount

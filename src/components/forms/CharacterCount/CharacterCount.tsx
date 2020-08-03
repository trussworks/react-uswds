import React, { useState } from 'react'
import classnames from 'classnames'

import { TextInput, TextInputProps } from '../TextInput/TextInput'
import { Textarea, TextareaProps } from '../Textarea/Textarea'

/* Defaults
   This is a fallback for character count validation.
   In most cases, though, props will be passed in by consumer 
   to use custom logic for character count (for example, unicode aware)
   and to account for i18n-aware strings
*/
const defaultCharacterCount = (text: string): number => text.length
const defaultMessage = (currentCount: number, max: number): string => {
  const emptyMessageFormat = `${max} characters allowed`
  const remainingPluralFormat = '$0 characters left'
  const remainingSingularFormat = '$0 character left'
  const overSingularFormat = '$0 character over limit'
  const overPluralFormat = '$0 characters over limit'

  if (currentCount === 0) {
    return emptyMessageFormat
  } else if (currentCount <= max) {
    switch (max - currentCount) {
      case 1:
        return remainingSingularFormat.replace('$0', '1')
      default:
        return remainingPluralFormat.replace(
          '$0',
          (max - currentCount).toString()
        )
    }
  } else {
    switch (currentCount - max) {
      case 1:
        return overSingularFormat.replace('$0', '1')
      default:
        return overPluralFormat.replace('$0', (currentCount - max).toString())
    }
  }
}

/* Types */
interface BaseCharacterCountProps {
  id: string
  name: string
  maxLength: number
  defaultValue?: string
  className?: string
  isTextArea?: boolean
  getCharacterCount?: (text: string) => number
  getMessage?: (remainingCount: number) => string
}

type TextInputCharacterCountProps = BaseCharacterCountProps & TextInputProps

type TextareaCharacterCountProps = BaseCharacterCountProps &
  TextareaProps &
  JSX.IntrinsicElements['textarea']

/* Main */
export const CharacterCount = (
  props: TextInputCharacterCountProps | TextareaCharacterCountProps
): React.ReactElement => {
  const {
    id,
    name,
    className,
    maxLength,
    defaultValue = '',
    isTextArea = false,
    getCharacterCount = defaultCharacterCount,
    getMessage = defaultMessage,
    ...remainingProps
  } = props

  const initialCount = getCharacterCount(defaultValue)
  const [message, setMessage] = useState(getMessage(initialCount, maxLength))
  const [isValid, setIsValid] = useState(initialCount > maxLength)

  const classes = classnames('usa-character-count__field', className)
  const messageClasses = classnames(
    'usa-hint',
    'usa-character-count__message',
    { 'usa-character-count__message--invalid': isValid }
  )

  const updateStateOnChange = (inputValue: string): void => {
    const length = getCharacterCount(inputValue)
    const message = getMessage(length, maxLength)
    setMessage(message)
    setIsValid(length > maxLength)
  }

  // Update component state and also handle any onChange passed in via props
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback?: (e: any) => void
  ): void => {
    const {
      target: { value = '' },
    } = e
    updateStateOnChange(value)
    if (callback) callback(e)
  }

  const Message = (): React.ReactElement => {
    return (
      <span id={id} className={messageClasses} aria-live="polite">
        {message}
      </span>
    )
  }

  if (isTextArea) {
    const { onChange, inputRef, ...textAreaProps } = remainingProps as Partial<
      TextareaCharacterCountProps
    >

    return (
      <>
        <Textarea
          id={id}
          data-testid="characterCountTextarea"
          name={name}
          className={classes}
          defaultValue={defaultValue}
          onChange={(e): void => handleChange(e, onChange)}
          inputRef={inputRef}
          {...textAreaProps}
        />
        <Message />
      </>
    )
  } else {
    const {
      onChange,
      inputRef,
      type = 'text',
      ...inputProps
    } = remainingProps as Partial<TextInputCharacterCountProps>

    return (
      <>
        <TextInput
          id={id}
          type={type}
          data-testid="characterCountTextInput"
          name={name}
          className={classes}
          defaultValue={defaultValue}
          onChange={(e): void => handleChange(e, onChange)}
          inputRef={inputRef}
          {...inputProps}
        />
        <Message />
      </>
    )
  }
}

export default CharacterCount

import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'

import TextInput, { TextInputProps } from '../TextInput/TextInput.js'
import Textarea, { TextareaProps } from '../Textarea/Textarea.js'
import { defaultCharacterCount, defaultMessage } from './utils.js'

/* Types */
export type BaseCharacterCountProps = {
  id: string
  name: string
  maxLength: number
  value?: string
  defaultValue?: string
  className?: string
  isTextArea?: boolean
  getCharacterCount?: (text: string) => number
  getMessage?: (remainingCount: number, max: number) => string
}

export type TextInputCharacterCountProps = BaseCharacterCountProps &
  TextInputProps

export type TextareaCharacterCountProps = BaseCharacterCountProps &
  TextareaProps &
  JSX.IntrinsicElements['textarea']

export type CharacterCountProps =
  | TextInputCharacterCountProps
  | TextareaCharacterCountProps

/* Main */
const CharacterCount = ({
  id,
  name,
  className,
  maxLength,
  value = '',
  defaultValue = '',
  isTextArea = false,
  getCharacterCount = defaultCharacterCount,
  getMessage = defaultMessage,
  ...remainingProps
}: CharacterCountProps): React.ReactElement => {
  const initialCount = getCharacterCount(value || defaultValue)
  const [length, setLength] = useState(initialCount)
  const [message, setMessage] = useState(getMessage(initialCount, maxLength))
  const [isValid, setIsValid] = useState(initialCount < maxLength)
  const srMessageRef = useRef<HTMLDivElement>(null)

  const classes = classnames('usa-character-count__field', className)
  const messageClasses = classnames('usa-hint', 'usa-character-count__status', {
    'usa-character-count__status--invalid': !isValid,
  })

  useEffect(() => {
    const message = getMessage(length, maxLength)
    setMessage(message)
    setIsValid(length <= maxLength)
    // Updates the character count status for screen readers after a 1000ms delay
    const timer = setTimeout(() => {
      // Setting the text directly for VoiceOver compatibility.
      if (srMessageRef.current) srMessageRef.current.textContent = message
    }, 1000)
    return () => clearTimeout(timer)
  }, [length])

  const handleBlur = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback?: (e: any) => void
  ): void => {
    const validationMessage = !isValid ? 'The content is too long.' : ''
    e.target.setCustomValidity(validationMessage)
    if (callback) callback(e)
  }

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
    setLength(getCharacterCount(value))

    if (callback) callback(e)
  }

  let InputComponent: React.ReactElement
  if (isTextArea) {
    const { onBlur, onChange, inputRef, ...textAreaProps } =
      remainingProps as Partial<TextareaCharacterCountProps>

    const attributes = {
      id: id,
      name: name,
      className: classes,
      ...(value ? { value: value } : { defaultValue: defaultValue }),
      onBlur: (e: React.FocusEvent<HTMLTextAreaElement, Element>): void =>
        handleBlur(e, onBlur),
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>): void =>
        handleChange(e, onChange),
      inputRef: inputRef,
      ...textAreaProps,
    }
    InputComponent = <Textarea {...attributes} />
  } else {
    const {
      onBlur,
      onChange,
      inputRef,
      type = 'text',
      ...inputProps
    } = remainingProps as Partial<TextInputCharacterCountProps>
    const attributes = {
      id: id,
      type: type,
      name: name,
      className: classes,
      ...(value ? { value: value } : { defaultValue: defaultValue }),
      onBlur: (e: React.FocusEvent<HTMLInputElement, Element>): void =>
        handleBlur(e, onBlur),
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void =>
        handleChange(e, onChange),
      inputRef: inputRef,
      ...inputProps,
    }
    InputComponent = <TextInput {...attributes} />
  }

  return (
    <>
      {InputComponent}
      <span className="usa-sr-only" id={`${id}-info`}>
        You can enter up to {maxLength} characters
      </span>
      <div
        className={messageClasses}
        aria-hidden="true"
        data-testid="characterCountMessage">
        {message}
      </div>
      <div
        ref={srMessageRef}
        className="usa-character-count__sr-status usa-sr-only"
        aria-live="polite"
        data-testid="characterCountSRMessage"
      />
    </>
  )
}

export default CharacterCount

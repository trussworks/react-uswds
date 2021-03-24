import React from 'react'
import classnames from 'classnames'
import { deprecationWarning } from '../../../deprecation'

type TextInputRef =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined

interface RequiredTextInputProps {
  id: string
  name: string
  type: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url'
}

interface CustomTextInputProps {
  className?: string
  validationStatus?: 'error' | 'success'
  /**
   * @deprecated since 1.6.0, use validationStatus
   */
  error?: boolean
  /**
   * @deprecated since 1.6.0, use validationStatus
   */
  success?: boolean
  inputSize?: 'small' | 'medium'
  /**
   * @deprecated since 1.6.0, use inputSize
   */
  small?: boolean
  /**
   * @deprecated since 1.6.0, use inputSize
   */
  medium?: boolean
  inputRef?: TextInputRef
}

export type OptionalTextInputProps = CustomTextInputProps &
  JSX.IntrinsicElements['input']

export type TextInputProps = RequiredTextInputProps & OptionalTextInputProps

export const TextInput = ({
  id,
  name,
  type,
  className,
  validationStatus,
  error,
  success,
  inputSize,
  small,
  medium,
  inputRef,
  ...inputProps
}: TextInputProps): React.ReactElement => {
  if (error) {
    deprecationWarning(
      'TextInput property error is deprecated.  Use validationStatus'
    )
  }
  if (success) {
    deprecationWarning(
      'TextInput property success is deprecated.  Use validationStatus'
    )
  }
  if (small) {
    deprecationWarning('TextInput property small is deprecated.  Use inputSize')
  }
  if (medium) {
    deprecationWarning(
      'TextInput property medium is deprecated.  Use inputSize'
    )
  }

  const isError = validationStatus ? validationStatus === 'error' : error
  const isSuccess = validationStatus ? validationStatus === 'success' : success
  const isSmall = inputSize ? inputSize === 'small' : small
  const isMedium = inputSize ? inputSize === 'medium' : medium
  const classes = classnames(
    'usa-input',
    {
      'usa-input--error': isError,
      'usa-input--success': isSuccess,
      'usa-input--small': isSmall,
      'usa-input--medium': isMedium,
    },
    className
  )

  return (
    <input
      data-testid="textInput"
      className={classes}
      id={id}
      name={name}
      type={type}
      ref={inputRef}
      {...inputProps}
    />
  )
}

export default TextInput

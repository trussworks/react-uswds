import React from 'react'
import classnames from 'classnames'
import type { ValidationStatus } from '../../../types/validationStatus.js'

export type TextInputRef =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined

export type RequiredTextInputProps = {
  id: string
  name: string
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url'
}

export interface BaseTextInputProps {
  className?: string
  validationStatus?: ValidationStatus
  inputSize?: 'small' | 'medium'
  inputRef?: TextInputRef
  inputProps?: JSX.IntrinsicElements['input']
}

export type OptionalTextInputProps = BaseTextInputProps &
  JSX.IntrinsicElements['input']

export type TextInputProps = RequiredTextInputProps & OptionalTextInputProps

const TextInput = ({
  className,
  validationStatus,
  inputSize,
  inputRef,
  ...inputProps
}: TextInputProps): React.ReactElement => {
  const isError = validationStatus === 'error'
  const isSuccess = validationStatus === 'success'
  const isSmall = inputSize === 'small'
  const isMedium = inputSize === 'medium'

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
      ref={inputRef}
      {...inputProps}
    />
  )
}

export default TextInput

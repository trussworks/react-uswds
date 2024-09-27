import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { ValidationStatus } from '../../../types/validationStatus'

type TextInputRef =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined

type RequiredTextInputProps = {
  id: string
  name: string
  type: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url'
}

type CustomTextInputProps = {
  className?: string
  validationStatus?: ValidationStatus
  inputSize?: 'small' | 'medium'
  inputRef?: TextInputRef
  inputProps?: JSX.IntrinsicElements['input']
}

export type OptionalTextInputProps = CustomTextInputProps &
  JSX.IntrinsicElements['input']

export type TextInputProps = RequiredTextInputProps & OptionalTextInputProps

export const TextInput = forwardRef(
  (
    props: TextInputProps,
    ref: React.ForwardedRef<HTMLInputElement> | undefined
  ): React.ReactElement => {
    const {
      id,
      name,
      type,
      className,
      validationStatus,
      inputSize,
      inputRef,
      ...inputProps
    } = props

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
        id={id}
        name={name}
        type={type}
        ref={inputRef || ref}
        {...inputProps}
      />
    )
  }
)

TextInput.displayName = 'TextInput'
export default TextInput

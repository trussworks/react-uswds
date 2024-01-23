import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { ValidationStatus } from '../../../types/validationStatus'

export type TextInputRef =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined

export type RequiredTextInputProps = Required<
  Pick<JSX.IntrinsicElements['input'], 'id' | 'name' | 'type'>
>

export type BaseTextInputProps = {
  validationStatus?: ValidationStatus
  inputSize?: 'small' | 'medium'
  /**
   * @deprecated Use ref instead
   */
  inputRef?: TextInputRef
  inputProps?: JSX.IntrinsicElements['input']
}

export type TextInputProps = BaseTextInputProps &
  RequiredTextInputProps &
  Omit<JSX.IntrinsicElements['input'], 'id' | 'name' | 'type'>

export const TextInputForwardRef: React.ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = ({
  id,
  name,
  type,
  className,
  validationStatus,
  inputSize,
  inputRef,
  ...inputProps
}, ref): React.ReactElement => {
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
      ref={ref ?? inputRef}
      {...inputProps}
    />
  )
}

export const TextInput = forwardRef(TextInputForwardRef)

export default TextInput

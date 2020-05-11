import React from 'react'
import classnames from 'classnames'

export interface TextInputProps {
  id: string
  name: string
  type: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url'
  className?: string
  error?: boolean
  success?: boolean
  small?: boolean
  medium?: boolean
  inputRef?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined
}

export const TextInput = (
  props: TextInputProps & React.InputHTMLAttributes<HTMLInputElement>
): React.ReactElement => {
  const {
    id,
    name,
    type,
    className,
    error,
    success,
    small,
    medium,
    inputRef,
    ...inputProps
  } = props

  const classes = classnames(
    'usa-input',
    {
      'usa-input--error': error,
      'usa-input--success': success,
      'usa-input--small': small,
      'usa-input--medium': medium,
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

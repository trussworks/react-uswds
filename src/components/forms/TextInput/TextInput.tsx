import React from 'react'
import classnames from 'classnames'

interface TextInputProps {
  id: string
  name: string
  type: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url'
  className?: string
  error?: boolean
  success?: boolean
  small?: boolean
  medium?: boolean
}

export const TextInput = (
  props: TextInputProps & React.HTMLProps<HTMLInputElement>
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
    autoComplete,
    autoCapitalize,
    autoCorrect,
    disabled,
    inputMode,
    maxLength,
    minLength,
    pattern,
    placeholder,
    readOnly,
    required,
    size,
    step,
    value,
    onBlur,
    onChange,
    onFocus,
    ...otherProps
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
      disabled={disabled}
      readOnly={readOnly}
      autoComplete={autoComplete}
      inputMode={inputMode}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      placeholder={placeholder}
      required={required}
      size={size}
      step={step}
      value={value}
      aria-required={required}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      {...otherProps}
    />
  )
}

export default TextInput

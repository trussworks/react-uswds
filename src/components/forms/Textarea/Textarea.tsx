import React from 'react'
import classnames from 'classnames'

interface TextareaProps {
  id: string
  name: string
  className?: string
  error?: boolean
  success?: boolean
  children?: React.ReactNode
  inputRef?: React.RefObject<HTMLTextAreaElement>
}

export const Textarea = (
  props: TextareaProps & React.HTMLProps<HTMLTextAreaElement>
): React.ReactElement => {
  const {
    id,
    name,
    className,
    error,
    success,
    children,
    cols,
    rows,
    autoComplete,
    autoCapitalize,
    autoCorrect,
    disabled,
    inputMode,
    maxLength,
    minLength,
    placeholder,
    readOnly,
    required,
    onBlur,
    onChange,
    onFocus,
    inputRef,
  } = props

  const classes = classnames(
    'usa-textarea',
    {
      'usa-input--error': error,
      'usa-input--success': success,
    },
    className
  )

  return (
    <textarea
      data-testid="textarea"
      className={classes}
      id={id}
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      autoComplete={autoComplete}
      inputMode={inputMode}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      required={required}
      cols={cols}
      rows={rows}
      aria-required={required}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      ref={inputRef}>
      {children}
    </textarea>
  )
}

export default Textarea

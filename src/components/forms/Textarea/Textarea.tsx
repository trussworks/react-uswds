import React, { type JSX } from 'react'
import classnames from 'classnames'
import { LegacyInputRef } from '../../../types/legacyInputRef'

export interface TextareaProps {
  id: string
  name: string
  className?: string
  error?: boolean
  success?: boolean
  children?: React.ReactNode
  inputRef?: LegacyInputRef<HTMLTextAreaElement>
}

export const Textarea = ({
  id,
  name,
  className,
  error,
  success,
  children,
  inputRef,
  ...inputProps
}: TextareaProps & JSX.IntrinsicElements['textarea']): JSX.Element => {
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
      ref={inputRef}
      {...inputProps}>
      {children}
    </textarea>
  )
}

export default Textarea

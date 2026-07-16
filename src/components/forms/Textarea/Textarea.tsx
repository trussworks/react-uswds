import React, { forwardRef, type JSX } from 'react'
import classnames from 'classnames'

export type TextareaProps = {
  id: string
  name: string
  className?: string
  error?: boolean
  success?: boolean
  children?: React.ReactNode
} & JSX.IntrinsicElements['textarea']

export const Textarea = forwardRef(
  (
    {
      id,
      name,
      className,
      error,
      success,
      children,
      ...inputProps
    }: TextareaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement> | undefined
  ): JSX.Element => {
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
        ref={ref}
        {...inputProps}>
        {children}
      </textarea>
    )
  }
)

Textarea.displayName = 'Textarea'
export default Textarea

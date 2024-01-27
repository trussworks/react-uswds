import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type TextareaRef =
  | string
  | string
  | ((instance: HTMLTextAreaElement | null) => void)
  | React.RefObject<HTMLTextAreaElement>
  | null
  | undefined

export interface BaseTextareaProps {
  id: string
  name: string
  className?: string
  error?: boolean
  success?: boolean
  children?: React.ReactNode
  /**
   * @deprecated Use ref instead
   */
  inputRef?: TextareaRef
}

export type TextareaProps = BaseTextareaProps &
  React.ComponentPropsWithoutRef<'textarea'>

export const TextareaForwardRef: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = (
  { id, name, className, error, success, children, inputRef, ...inputProps },
  ref
): React.ReactElement => {
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
      ref={ref ?? inputRef}
      {...inputProps}>
      {children}
    </textarea>
  )
}

const Textarea = forwardRef(TextareaForwardRef)

export default Textarea

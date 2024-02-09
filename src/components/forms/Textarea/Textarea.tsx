import React from 'react'
import classnames from 'classnames'

type TextareaRef =
  | string
  | string
  | ((instance: HTMLTextAreaElement | null) => void)
  | React.RefObject<HTMLTextAreaElement>
  | null
  | undefined

export interface TextareaProps {
  className?: string
  error?: boolean
  success?: boolean
  children?: React.ReactNode
  inputRef?: TextareaRef
}

export const Textarea = ({
  className,
  error,
  success,
  children,
  inputRef,
  ...inputProps
}: TextareaProps & JSX.IntrinsicElements['textarea']): React.ReactElement => {
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
      ref={inputRef}
      {...inputProps}>
      {children}
    </textarea>
  )
}

export default Textarea

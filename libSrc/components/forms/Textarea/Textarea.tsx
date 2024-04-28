import React from 'react'
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
  inputRef?: TextareaRef
}

export type TextareaProps = BaseTextareaProps &
  JSX.IntrinsicElements['textarea']

const Textarea = ({
  id,
  name,
  className,
  error,
  success,
  children,
  inputRef,
  ...inputProps
}: TextareaProps): React.ReactElement => {
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

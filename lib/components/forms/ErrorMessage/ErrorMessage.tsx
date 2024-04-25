import React from 'react'
import classnames from 'classnames'

export type ErrorMessageProps = {
  children: React.ReactNode
  id?: string
  className?: string
} & JSX.IntrinsicElements['span']

const ErrorMessage = ({
  children,
  className,
  id,
  ...props
}: ErrorMessageProps): React.ReactElement => {
  const classes = classnames('usa-error-message', className)

  return (
    <span
      data-testid="errorMessage"
      className={classes}
      id={id}
      role="alert"
      {...props}>
      {children}
    </span>
  )
}

export default ErrorMessage

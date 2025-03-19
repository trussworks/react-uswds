import React, { type JSX } from 'react'
import classnames from 'classnames'

type ErrorMessageProps = {
  children: React.ReactNode
  id?: string
  className?: string
}

export const ErrorMessage = ({
  children,
  className,
  id,
}: ErrorMessageProps): JSX.Element => {
  const classes = classnames('usa-error-message', className)

  return (
    <span data-testid="errorMessage" className={classes} id={id} role="alert">
      {children}
    </span>
  )
}

export default ErrorMessage

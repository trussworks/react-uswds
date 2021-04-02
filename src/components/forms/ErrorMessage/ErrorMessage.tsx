import React from 'react'
import classnames from 'classnames'

interface ErrorMessageProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export const ErrorMessage = ({
  children,
  className,
  id,
}: ErrorMessageProps): React.ReactElement => {
  const classes = classnames('usa-error-message', className)

  return (
    <span data-testid="errorMessage" className={classes} id={id} role="alert">
      {children}
    </span>
  )
}

export default ErrorMessage

import React from 'react'
import classnames from 'classnames'

interface ErrorMessageProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export const ErrorMessage = (props: ErrorMessageProps): React.ReactElement => {
  const { children, className, id } = props

  const classes = classnames('usa-error-message', className)

  return (
    <span data-testid="errorMessage" className={classes} id={id} role="alert">
      {children}
    </span>
  )
}

export default ErrorMessage

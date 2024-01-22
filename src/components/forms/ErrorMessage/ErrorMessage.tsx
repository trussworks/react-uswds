import React from 'react'
import classnames from 'classnames'

export interface BaseErrorMessageProps {}

export type ErrorMessageProps = BaseErrorMessageProps &
  JSX.IntrinsicElements['span']

export const ErrorMessage = ({
  children,
  className,
  id,
  ...spanProps
}: ErrorMessageProps): React.ReactElement => {
  const classes = classnames('usa-error-message', className)

  return (
    <span
      {...spanProps}
      data-testid="errorMessage"
      className={classes}
      id={id}
      role="alert">
      {children}
    </span>
  )
}

export default ErrorMessage

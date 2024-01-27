import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseErrorMessageProps {}

export type ErrorMessageProps = BaseErrorMessageProps &
  JSX.IntrinsicElements['span']

export const ErrorMessageForwardRef: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  ErrorMessageProps
> = ({ children, className, id, ...spanProps }, ref): React.ReactElement => {
  const classes = classnames('usa-error-message', className)

  return (
    <span
      ref={ref}
      {...spanProps}
      data-testid="errorMessage"
      className={classes}
      id={id}
      role="alert">
      {children}
    </span>
  )
}

const ErrorMessage = forwardRef(ErrorMessageForwardRef)

export default ErrorMessage

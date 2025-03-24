import React, { type JSX } from 'react'
import classnames from 'classnames'

export type FormGroupProps = {
  children: React.ReactNode
  className?: string
  error?: boolean
}

export const FormGroup = ({
  children,
  className,
  error,
}: FormGroupProps): JSX.Element => {
  const classes = classnames(
    'usa-form-group',
    { 'usa-form-group--error': error },
    className
  )

  return (
    <div data-testid="formGroup" className={classes}>
      {children}
    </div>
  )
}

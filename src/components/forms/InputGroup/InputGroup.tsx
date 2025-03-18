import React, { type JSX } from 'react'
import classnames from 'classnames'

export interface InputGroupProps {
  children: React.ReactNode
  className?: string
  error?: boolean
}

export const InputGroup = ({
  children,
  className,
  error,
}: InputGroupProps): JSX.Element => {
  const classes = classnames(
    'usa-input-group',
    { 'usa-input-group--error': error },
    className
  )

  return (
    <div data-testid="inputGroup" className={classes}>
      {children}
    </div>
  )
}

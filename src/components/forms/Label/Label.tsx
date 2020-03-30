import React from 'react'
import classnames from 'classnames'

interface LabelProps {
  children: React.ReactNode
  htmlFor: string
  className?: string
  error?: boolean
  hint?: React.ReactNode
}

export const Label = (props: LabelProps): React.ReactElement => {
  const { children, htmlFor, className, error, hint } = props

  const classes = classnames(
    'usa-label',
    { 'usa-label--error': error },
    className
  )

  return (
    <label data-testid="label" className={classes} htmlFor={htmlFor}>
      {children}
      {hint && <span className="usa-hint">{hint}</span>}
    </label>
  )
}

export default Label

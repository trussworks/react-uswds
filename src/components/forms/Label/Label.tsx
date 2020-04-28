import React from 'react'
import classnames from 'classnames'

interface LabelProps {
  children: React.ReactNode
  htmlFor: string
  className?: string
  error?: boolean
  hint?: React.ReactNode
  search?: boolean
}

export const Label = (props: LabelProps): React.ReactElement => {
  const { children, htmlFor, className, error, hint, search } = props

  const classes = classnames(
    {
      'usa-label': !search,
      'usa-sr-only': search,
      'usa-label--error': error,
    },
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

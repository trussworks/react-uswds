import React from 'react'
import classnames from 'classnames'

interface LabelProps {
  children: React.ReactNode
  htmlFor: string
  className?: string
  error?: boolean
  hint?: React.ReactNode
  srOnly?: boolean
}

export const Label = (
  props: LabelProps & JSX.IntrinsicElements['label']
): React.ReactElement => {
  const {
    children,
    htmlFor,
    className,
    error,
    hint,
    srOnly,
    ...labelProps
  } = props

  const classes = classnames(
    {
      'usa-label': !srOnly,
      'usa-sr-only': srOnly,
      'usa-label--error': error,
    },
    className
  )

  return (
    <label
      {...labelProps}
      data-testid="label"
      className={classes}
      htmlFor={htmlFor}>
      {children}
      {hint && <span className="usa-hint">{hint}</span>}
    </label>
  )
}

export default Label

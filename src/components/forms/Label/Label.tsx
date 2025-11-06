import React, { type JSX } from 'react'
import classnames from 'classnames'
import { RequiredMarker } from './RequiredMarker'

export type LabelProps = {
  children: React.ReactNode
  htmlFor: string
  className?: string
  error?: boolean
  hint?: React.ReactNode
  srOnly?: boolean
  requiredMarker?: boolean
} & JSX.IntrinsicElements['label']

export const Label = ({
  children,
  htmlFor,
  className,
  error,
  hint,
  srOnly,
  requiredMarker,
  ...labelProps
}: LabelProps): JSX.Element => {
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
      {requiredMarker && (
        <>
          {' '}
          <RequiredMarker />
        </>
      )}
    </label>
  )
}

export default Label

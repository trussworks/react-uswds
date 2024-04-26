import React from 'react'
import classnames from 'classnames'
import RequiredMarker from '../RequiredMarker/RequiredMarker.js'

export type LabelProps = {
  children: React.ReactNode
  htmlFor: string
  className?: string
  error?: boolean
  hint?: React.ReactNode
  srOnly?: boolean
  requiredMarker?: boolean
} & JSX.IntrinsicElements['label']

const Label = ({
  children,
  htmlFor,
  className,
  error,
  hint,
  srOnly,
  requiredMarker,
  ...labelProps
}: LabelProps): React.ReactElement => {
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

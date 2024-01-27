import React, { forwardRef } from 'react'
import classnames from 'classnames'
import RequiredMarker from './RequiredMarker'

export type BaseLabelProps = {
  children: React.ReactNode
  htmlFor: string
  className?: string
  error?: boolean
  hint?: React.ReactNode
  srOnly?: boolean
  requiredMarker?: boolean
}

export type LabelProps = BaseLabelProps & JSX.IntrinsicElements['label']

export const LabelForwardRef: React.ForwardRefRenderFunction<
  HTMLLabelElement,
  LabelProps
> = (
  {
    children,
    htmlFor,
    className,
    error,
    hint,
    srOnly,
    requiredMarker,
    ...labelProps
  },
  ref
): React.ReactElement => {
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
      ref={ref}
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

const Label = forwardRef(LabelForwardRef)

export default Label

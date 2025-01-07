import React, { JSX } from 'react'
import classnames from 'classnames'
import { RequiredMarker } from '../Label/RequiredMarker'

type FieldsetProps = {
  children: React.ReactNode
  legend?: React.ReactNode
  legendStyle?: 'default' | 'large' | 'srOnly'
  className?: string
  requiredMarker?: boolean
}

export const Fieldset = ({
  children,
  legend,
  className,
  legendStyle = 'default',
  requiredMarker,
  ...fieldsetProps
}: FieldsetProps & JSX.IntrinsicElements['fieldset']): React.ReactElement => {
  const classes = classnames('usa-fieldset', className)

  const legendClasses = classnames({
    'usa-legend': legendStyle === 'default',
    'usa-legend--large': legendStyle === 'large',
    'usa-sr-only': legendStyle === 'srOnly',
  })

  return (
    <fieldset data-testid="fieldset" className={classes} {...fieldsetProps}>
      {legend && (
        <legend className={legendClasses}>
          {legend}
          {requiredMarker && (
            <>
              {' '}
              <RequiredMarker />
            </>
          )}
        </legend>
      )}
      {children}
    </fieldset>
  )
}

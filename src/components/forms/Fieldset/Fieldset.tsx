import React from 'react'
import classnames from 'classnames'
import { RequiredMarker } from '../Label/RequiredMarker'

export type BaseFieldsetProps = {
  children: React.ReactNode
  legend?: React.ReactNode
  legendStyle?: 'default' | 'large' | 'srOnly'
  className?: string
  requiredMarker?: boolean
}

export type FieldsetProps = BaseFieldsetProps &
  JSX.IntrinsicElements['fieldset']

export const Fieldset = ({
  children,
  legend,
  className,
  legendStyle = 'default',
  requiredMarker,
  ...fieldsetProps
}: FieldsetProps): React.ReactElement => {
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

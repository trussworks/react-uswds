import React from 'react'
import classnames from 'classnames'
import { deprecationWarning } from '../../../deprecation'

interface FieldsetProps {
  children: React.ReactNode
  legend?: React.ReactNode
  /**
   * @deprecated since 1.15.0, use legendStyle
   */
  legendSrOnly?: boolean
  legendStyle?: 'default' | 'large' | 'srOnly'
  className?: string
}

export const Fieldset = ({
  children,
  legend,
  className,
  legendSrOnly,
  legendStyle = 'default',
  ...fieldsetProps
}: FieldsetProps & JSX.IntrinsicElements['fieldset']): React.ReactElement => {
  const classes = classnames('usa-fieldset', className)

  if (legendSrOnly) {
    deprecationWarning(
      "Fieldset property legendSrOnly is deprecated. Use legendStyle = 'srOnly'."
    )
  }

  const legendClasses = classnames({
    'usa-legend': legendStyle === 'default',
    'usa-legend--large': legendStyle === 'large',
    'usa-sr-only': legendStyle === 'srOnly' || legendSrOnly,
  })

  return (
    <fieldset data-testid="fieldset" className={classes} {...fieldsetProps}>
      {legend && <legend className={legendClasses}>{legend}</legend>}
      {children}
    </fieldset>
  )
}

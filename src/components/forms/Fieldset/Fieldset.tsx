import React from 'react'
import classnames from 'classnames'

type FieldsetProps = {
  children: React.ReactNode
  legend?: React.ReactNode
  legendStyle?: 'default' | 'large' | 'srOnly'
  className?: string
}

export const Fieldset = ({
  children,
  legend,
  className,
  legendStyle = 'default',
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
      {legend && <legend className={legendClasses}>{legend}</legend>}
      {children}
    </fieldset>
  )
}

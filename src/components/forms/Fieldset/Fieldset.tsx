import React from 'react'
import classnames from 'classnames'

interface FieldsetProps {
  children: React.ReactNode
  legend?: React.ReactNode
  legendSrOnly?: boolean
  className?: string
}

export const Fieldset = ({ 
  children, legend, className, legendSrOnly 
}: FieldsetProps): React.ReactElement => {
  const classes = classnames('usa-fieldset', className)

  const legendClasses = classnames('usa-legend', {
    'usa-sr-only': legendSrOnly,
  })

  return (
    <fieldset data-testid="fieldset" className={classes}>
      {legend && <legend className={legendClasses}>{legend}</legend>}
      {children}
    </fieldset>
  )
}

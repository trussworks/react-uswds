import React from 'react'
import classnames from 'classnames'

interface FieldsetProps {
  children: React.ReactNode
  legend?: React.ReactNode
  className?: string
}

export const Fieldset = (props: FieldsetProps): React.ReactElement => {
  const { children, legend, className } = props

  const classes = classnames('usa-fieldset', className)

  return (
    <fieldset data-testid="fieldset" className={classes}>
      {legend && <legend className="usa-legend">{legend}</legend>}
      {children}
    </fieldset>
  )
}

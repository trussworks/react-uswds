import React, { type JSX } from 'react'
import classnames from 'classnames'

export type DateInputGroupProps = JSX.IntrinsicElements['div']

export const DateInputGroup = ({
  children,
  className,
  ...divAttributes
}: DateInputGroupProps): JSX.Element => {
  const classes = classnames('usa-memorable-date', className)

  return (
    <div className={classes} {...divAttributes} data-testid="dateInputGroup">
      {children}
    </div>
  )
}

export default DateInputGroup

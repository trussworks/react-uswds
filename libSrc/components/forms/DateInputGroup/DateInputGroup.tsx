import React from 'react'
import classnames from 'classnames'

export interface BaseDateInputGroupProps {}

export type DateInputGroupProps = BaseDateInputGroupProps &
  JSX.IntrinsicElements['div']

const DateInputGroup = ({
  children,
  className,
  ...divAttributes
}: DateInputGroupProps): React.ReactElement => {
  const classes = classnames('usa-memorable-date', className)

  return (
    <div className={classes} {...divAttributes} data-testid="dateInputGroup">
      {children}
    </div>
  )
}

export default DateInputGroup

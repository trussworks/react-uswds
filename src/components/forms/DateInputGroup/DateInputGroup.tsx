import React from 'react'
import classnames from 'classnames'

export const DateInputGroup = (
  props: React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const { children, className, ...divAttributes } = props

  const classes = classnames('usa-memorable-date', className)

  return (
    <div className={classes} {...divAttributes} data-testid="dateInputGroup">
      {children}
    </div>
  )
}

export default DateInputGroup

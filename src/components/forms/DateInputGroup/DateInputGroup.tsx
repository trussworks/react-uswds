import React from 'react'
import classnames from 'classnames'

export interface DateInputGroupPropsBase {}

export type DateInputGroupProps = DateInputGroupPropsBase &
  JSX.IntrinsicElements['div']

export const DateInputGroup = ({
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

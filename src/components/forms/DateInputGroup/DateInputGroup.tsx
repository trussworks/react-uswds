import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface DateInputGroupPropsBase {}

export type DateInputGroupProps = DateInputGroupPropsBase &
  JSX.IntrinsicElements['div']

export const DateInputGroupForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DateInputGroupProps
> = ({ children, className, ...divAttributes }, ref): React.ReactElement => {
  const classes = classnames('usa-memorable-date', className)

  return (
    <div
      ref={ref}
      className={classes}
      {...divAttributes}
      data-testid="dateInputGroup">
      {children}
    </div>
  )
}

export const DateInputGroup = forwardRef(DateInputGroupForwardRef)

export default DateInputGroup

import React from 'react'

export const DateInputGroup = (
  props: React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const { children, ...divAttributes } = props

  return (
    <div
      className="usa-memorable-date"
      {...divAttributes}
      data-testid="dateInputGroup">
      {children}
    </div>
  )
}

export default DateInputGroup

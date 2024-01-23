import React, { forwardRef } from 'react'

export interface CollectionCalendarDateProps {
  datetime: string
}

export const SHORT_MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const CollectionCalendarDateForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CollectionCalendarDateProps
> = ({ datetime, ...props }, ref): React.ReactElement => {
  const dateObj = new Date(datetime)
  const isDateInvalid = dateObj && dateObj.getTime && isNaN(dateObj.getTime())

  if (isDateInvalid) {
    return <></>
  }

  return (
    <div
      {...props}
      ref={ref}
      className="usa-collection__calendar-date"
      data-testid="collection-calendar-date">
      <time dateTime={datetime}>
        <span className="usa-collection__calendar-date-month">
          {SHORT_MONTH_LABELS[dateObj.getMonth()]}
        </span>
        <span className="usa-collection__calendar-date-day">
          {dateObj.getDate()}
        </span>
      </time>
    </div>
  )
}

export const CollectionCalendarDate = forwardRef(
  CollectionCalendarDateForwardRef
)

export default CollectionCalendarDate

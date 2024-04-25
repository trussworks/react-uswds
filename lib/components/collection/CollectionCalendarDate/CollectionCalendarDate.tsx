import React from 'react'
import { SHORT_MONTH_LABELS } from '../constants.js'

export interface CollectionCalendarDateProps {
  datetime: string
}

const CollectionCalendarDate = ({
  datetime,
}: CollectionCalendarDateProps): React.ReactElement => {
  const dateObj = new Date(datetime)
  const isDateInvalid = dateObj && dateObj.getTime && isNaN(dateObj.getTime())

  if (isDateInvalid) {
    return <></>
  }

  return (
    <div
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

export default CollectionCalendarDate

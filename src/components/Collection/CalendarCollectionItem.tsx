import React from 'react'
import { CollectionItemBody } from './CollectionItemBody'

interface CalendarCollectionItemProps {
  heading: string
  description: string
  href: string
  dateTime: string
}

const SHORT_MONTH_LABELS = [
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

export const CalendarCollectionItem = ({
  heading,
  description,
  href,
  dateTime,
}: CalendarCollectionItemProps): React.ReactElement => {
  const dateObj = new Date(dateTime)
  return (
    <li className="usa-collection__item">
      <div className="usa-collection__calendar-date">
        <time dateTime={dateTime}>
          <span className="usa-collection__calendar-date-month">
            {SHORT_MONTH_LABELS[dateObj.getMonth()]}
          </span>
          <span className="usa-collection__calendar-date-day">
            {dateObj.getDate()}
          </span>
        </time>
      </div>
      <CollectionItemBody
        heading={heading}
        description={description}
        href={href}
      />
    </li>
  )
}

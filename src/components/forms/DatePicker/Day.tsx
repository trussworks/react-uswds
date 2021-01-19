import React from 'react'
import classnames from 'classnames'

import { DAY_OF_WEEK_LABELS, MONTH_LABELS } from './constants'
import { formatDate } from './utils'

export const Day = ({
  date,
  onClick,
  isDisabled = false,
  isSelected = false,
  isFocused = false,
  isPrevMonth = false,
  isFocusedMonth = false,
  isNextMonth = false,
  isToday = false,
}: {
  date: Date
  onClick: (value: string) => void
  isDisabled?: boolean
  isSelected?: boolean
  isFocused?: boolean
  isPrevMonth?: boolean
  isFocusedMonth?: boolean
  isNextMonth?: boolean
  isToday?: boolean
}): React.ReactElement => {
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const dayOfWeek = date.getDay()

  const formattedDate = formatDate(date)
  const tabIndex = isFocused ? 0 : -1

  // TODO - range date?

  const classes = classnames('usa-date-picker__calendar__date', {
    'usa-date-picker__calendar__date--previous-month': isPrevMonth,
    'usa-date-picker__calendar__date--current-month': isFocusedMonth,
    'usa-date-picker__calendar__date--next-month': isNextMonth,
    'usa-date-picker__calendar__date--selected': isSelected,
    'usa-date-picker__calendar__date--today': isToday,
    'usa-date-picker__calendar__date--focused': isFocused,
  })

  const monthStr = MONTH_LABELS[month]
  const dayStr = DAY_OF_WEEK_LABELS[dayOfWeek]

  const handleClick = (): void => {
    onClick(formattedDate)
  }

  return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <button
      type="button"
      data-testid="select-date"
      onClick={handleClick}
      tabIndex={tabIndex}
      className={classes}
      data-day={day}
      data-month={month + 1}
      data-year={year}
      data-value={formattedDate}
      aria-label={`${day} ${monthStr} ${year} ${dayStr}`}
      aria-selected={isSelected ? true : false}
      disabled={isDisabled}>
      {day}
    </button>
  )
}

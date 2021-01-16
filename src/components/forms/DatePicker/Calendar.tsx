import React from 'react'

import {
  DAY_OF_WEEK_LABELS,
  DAY_OF_WEEK_SHORT_LABELS,
  MONTH_LABELS,
} from './constants'
import {
  today,
  addDays,
  subMonths,
  addMonths,
  startOfMonth,
  startOfWeek,
  isSameDay,
  isSameMonth,
} from './utils'

import { Day } from './Day'

const listToTable = (list: React.ReactNode[], rowSize: number) => {
  const rows = []
  let i = 0

  while (i < list.length) {
    const row = []
    while (i < list.length && row.length < rowSize) {
      row.push(list[i])
      i += 1
    }
    rows.push(row)
  }

  return (
    <>
      {rows.map((r, rIndex) => (
        <tr key={`row_${rIndex}`}>
          {r.map((cell, cIndex) => (
            <td key={`row_${rIndex}_cell_${cIndex}`}>{cell}</td>
          ))}
        </tr>
      ))}
    </>
  )
}

export const Calendar = ({
  date = today(),
  selectedDate,
}: {
  date?: Date
  selectedDate?: Date
}): React.ReactElement => {
  // TODO handle disabled buttons
  // TODO handle button clicks

  const focusedDate = addDays(date, 0)
  const focusedMonth = date.getMonth()
  const focusedYear = date.getFullYear()

  const prevMonth = subMonths(date, 1)
  const nextMonth = addMonths(date, 1)

  const firstOfMonth = startOfMonth(date)
  const prevButtonsDisabled = false // TODO - mindate
  const nextButtonsDisabled = false // TODO - maxdate

  // TODO - range date

  const monthLabel = MONTH_LABELS[focusedMonth]

  const days = []

  let dateIterator = startOfWeek(firstOfMonth)
  while (
    days.length < 28 ||
    dateIterator.getMonth() === focusedMonth ||
    days.length % 7 !== 0
  ) {
    days.push(
      <Day
        date={dateIterator}
        isSelected={selectedDate && isSameDay(dateIterator, selectedDate)}
        isFocused={isSameDay(dateIterator, focusedDate)}
        isPrevMonth={isSameMonth(dateIterator, prevMonth)}
        isSameMonth={isSameMonth(dateIterator, focusedDate)}
        isNextMonth={isSameMonth(dateIterator, nextMonth)}
        isToday={isSameDay(dateIterator, today())}
      />
    )
    dateIterator = addDays(dateIterator, 1)
  }

  return (
    <div tabIndex={-1} className="usa-date-picker__calendar__date-picker">
      <div className="usa-date-picker__calendar__row">
        <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
          <button
            type="button"
            data-testid="previous-year"
            className="usa-date-picker__calendar__previous-year"
            aria-label="Navigate back one year">
            &nbsp;
          </button>
        </div>
        <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
          <button
            type="button"
            data-testid="previous-month"
            className="usa-date-picker__calendar__previous-month"
            aria-label="Navigate back one month">
            &nbsp;
          </button>
        </div>
        <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__month-label">
          <button
            type="button"
            data-testid="select-month"
            className="usa-date-picker__calendar__month-selection"
            aria-label={`${monthLabel}. Click to select month`}>
            {monthLabel}
          </button>
          <button
            type="button"
            data-testid="select-year"
            className="usa-date-picker__calendar__year-selection"
            aria-label={`${focusedYear}. Click to select year`}>
            {focusedYear}
          </button>
        </div>
        <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
          <button
            type="button"
            data-testid="next-month"
            className="usa-date-picker__calendar__next-month"
            aria-label="Navigate forward one month">
            &nbsp;
          </button>
        </div>
        <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
          <button
            type="button"
            data-testid="next-year"
            className="usa-date-picker__calendar__next-year"
            aria-label="Navigate forward one year">
            &nbsp;
          </button>
        </div>
      </div>
      <table className="usa-date-picker__calendar__table" role="presentation">
        <thead>
          <tr>
            {DAY_OF_WEEK_SHORT_LABELS.map((d, i) => (
              <th
                className="usa-date-picker__calendar__day-of-week"
                scope="col"
                // eslint-disable-next-line security/detect-object-injection
                aria-label={DAY_OF_WEEK_LABELS[i]}
                key={`day-of-week-${d}-${i}`}>
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{listToTable(days, 7)}</tbody>
      </table>
    </div>
  )
}

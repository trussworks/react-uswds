import React, { useState, useRef } from 'react'

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
  isDateWithinMinAndMax,
  subYears,
  keepDateBetweenMinAndMax,
  addYears,
} from './utils'

import { Day } from './Day'

const listToTable = (
  list: React.ReactNode[],
  rowSize: number
): React.ReactFragment => {
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
  handleSelectDate,
  minDate,
  maxDate,
}: {
  date?: Date
  selectedDate?: Date
  handleSelectDate: (value: string) => void
  minDate: Date
  maxDate?: Date
}): React.ReactElement => {
  const prevYearEl = useRef<HTMLButtonElement>(null)
  const datePickerEl = useRef<HTMLDivElement>(null)

  const [dateToDisplay, setDateToDisplay] = useState(date)

  const focusedDate = addDays(dateToDisplay, 0)
  const focusedMonth = dateToDisplay.getMonth()
  const focusedYear = dateToDisplay.getFullYear()

  const prevMonth = subMonths(dateToDisplay, 1)
  const nextMonth = addMonths(dateToDisplay, 1)

  const firstOfMonth = startOfMonth(dateToDisplay)
  const prevButtonsDisabled = isSameMonth(dateToDisplay, minDate)
  const nextButtonsDisabled = maxDate && isSameMonth(dateToDisplay, maxDate)

  // TODO handle button clicks
  const handlePreviousYearClick = (): void => {
    let newDate = subYears(dateToDisplay, 1)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    // TODO - set focus
    prevYearEl?.current?.focus()
  }

  const handlePreviousMonthClick = (): void => {
    let newDate = subMonths(dateToDisplay, 1)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    // TODO - set focus
  }

  const handleNextMonthClick = (): void => {
    let newDate = addMonths(dateToDisplay, 1)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    // TODO - set focus
  }

  const handleNextYearClick = (): void => {
    let newDate = addYears(dateToDisplay, 1)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    // TODO - set focus
  }

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
        onClick={handleSelectDate}
        isDisabled={!isDateWithinMinAndMax(dateIterator, minDate, maxDate)}
        isSelected={selectedDate && isSameDay(dateIterator, selectedDate)}
        isFocused={isSameDay(dateIterator, focusedDate)}
        isPrevMonth={isSameMonth(dateIterator, prevMonth)}
        isFocusedMonth={isSameMonth(dateIterator, focusedDate)}
        isNextMonth={isSameMonth(dateIterator, nextMonth)}
        isToday={isSameDay(dateIterator, today())}
      />
    )
    dateIterator = addDays(dateIterator, 1)
  }

  return (
    <div
      tabIndex={-1}
      className="usa-date-picker__calendar__date-picker"
      ref={datePickerEl}>
      <div className="usa-date-picker__calendar__row">
        <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
          <button
            type="button"
            data-testid="previous-year"
            onClick={handlePreviousYearClick}
            ref={prevYearEl}
            className="usa-date-picker__calendar__previous-year"
            aria-label="Navigate back one year"
            disabled={prevButtonsDisabled}>
            &nbsp;
          </button>
        </div>
        <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
          <button
            type="button"
            data-testid="previous-month"
            onClick={handlePreviousMonthClick}
            className="usa-date-picker__calendar__previous-month"
            aria-label="Navigate back one month"
            disabled={prevButtonsDisabled}>
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
            onClick={handleNextMonthClick}
            className="usa-date-picker__calendar__next-month"
            aria-label="Navigate forward one month"
            disabled={nextButtonsDisabled}>
            &nbsp;
          </button>
        </div>
        <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
          <button
            type="button"
            data-testid="next-year"
            onClick={handleNextYearClick}
            className="usa-date-picker__calendar__next-year"
            aria-label="Navigate forward one year"
            disabled={nextButtonsDisabled}>
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

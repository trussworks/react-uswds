import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'

import { MONTH_LABELS } from './constants'
import { isDatesMonthOutsideMinOrMax, listToTable, setMonth } from './utils'

export const MonthPicker = ({
  date,
  minDate,
  maxDate,
  handleSelectMonth,
}: {
  date: Date
  minDate: Date
  maxDate?: Date
  handleSelectMonth: (value: number) => void
}): React.ReactElement => {
  // TODO - use state for focused month
  const selectedMonth = date.getMonth()
  const [monthToDisplay, setMonthToDisplay] = useState(selectedMonth)
  const monthPickerEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const monthToFocus =
      monthPickerEl.current &&
      monthPickerEl.current.querySelector<HTMLButtonElement>(
        `[data-value="${monthToDisplay}"]`
      )
    if (monthToFocus) monthToFocus.focus()
  }, [monthToDisplay])

  const months = MONTH_LABELS.map((month, index) => {
    const monthToCheck = setMonth(date, index)
    const isDisabled = isDatesMonthOutsideMinOrMax(
      monthToCheck,
      minDate,
      maxDate
    )
    const isSelected = index === selectedMonth
    const isFocused = index === monthToDisplay

    const tabIndex = isFocused ? 0 : -1

    const classes = classnames('usa-date-picker__calendar__month', {
      'usa-date-picker__calendar__month--selected': isSelected,
      'usa-date-picker__calendar__month--focused': isFocused,
    })

    return (
      // eslint-disable-next-line jsx-a11y/role-supports-aria-props
      <button
        type="button"
        key={`selectMonth_${month}`}
        tabIndex={tabIndex}
        className={classes}
        data-value={index}
        data-label={month}
        aria-selected={isSelected}
        disabled={isDisabled}
        onClick={(): void => {
          handleSelectMonth(index)
        }}>
        {month}
      </button>
    )
  })

  return (
    <div
      tabIndex={-1}
      data-testid="calendar-month-picker"
      className="usa-date-picker__calendar__month-picker"
      ref={monthPickerEl}>
      <table className="usa-date-picker__calendar__table" role="presentation">
        <tbody>{listToTable(months, 3)}</tbody>
      </table>
    </div>
  )
}

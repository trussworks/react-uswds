import React, { useState, useEffect, useRef, KeyboardEvent } from 'react'
import classnames from 'classnames'

import {
  isDatesMonthOutsideMinOrMax,
  isSameMonth,
  keepDateBetweenMinAndMax,
  listToTable,
  setMonth,
  handleTabKey,
  isIosDevice,
} from './utils'

import { DatePickerLocalization, EN_US } from './i18n'

export const MonthPicker = ({
  date,
  minDate,
  maxDate,
  handleSelectMonth,
  i18n = EN_US,
}: {
  date: Date
  minDate: Date
  maxDate?: Date
  handleSelectMonth: (value: number) => void
  i18n?: DatePickerLocalization
}): React.ReactElement => {
  const selectedMonth = date.getMonth()
  const [monthToDisplay, setMonthToDisplay] = useState(selectedMonth)
  const monthPickerEl = useRef<HTMLDivElement>(null)
  const focusedMonthEl = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const monthToFocus =
      monthPickerEl.current &&
      monthPickerEl.current.querySelector<HTMLButtonElement>(
        `[data-value="${monthToDisplay}"]`
      )
    if (monthToFocus) monthToFocus.focus()
  }, [monthToDisplay])

  const handleMonthPickerTab = (event: KeyboardEvent): void => {
    handleTabKey(event, [focusedMonthEl?.current])
  }

  const handleKeyDownFromMonth = (event: KeyboardEvent): void => {
    let newDisplayMonth
    const target = event.target as HTMLButtonElement
    const selectedMonth = parseInt(target.dataset?.value || '', 10)
    const currentDate = setMonth(date, selectedMonth)

    switch (event.key) {
      case 'ArrowUp':
      case 'Up':
        newDisplayMonth = selectedMonth - 3
        break
      case 'ArrowDown':
      case 'Down':
        newDisplayMonth = selectedMonth + 3
        break
      case 'ArrowLeft':
      case 'Left':
        newDisplayMonth = selectedMonth - 1
        break
      case 'ArrowRight':
      case 'Right':
        newDisplayMonth = selectedMonth + 1
        break
      case 'Home':
        newDisplayMonth = selectedMonth - (selectedMonth % 3)
        break
      case 'End':
        newDisplayMonth = selectedMonth + 2 - (selectedMonth % 3)
        break
      case 'PageDown':
        newDisplayMonth = 11
        break
      case 'PageUp':
        newDisplayMonth = 0
        break
      default:
        return
    }

    if (newDisplayMonth !== undefined) {
      newDisplayMonth = Math.max(0, Math.min(11, newDisplayMonth))
      const newDate = setMonth(date, newDisplayMonth)
      const cappedDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
      if (!isSameMonth(currentDate, cappedDate)) {
        setMonthToDisplay(cappedDate.getMonth())
      }
    }

    event.preventDefault()
  }

  const monthNames = i18n.months

  const months = monthNames.map((month, index) => {
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

    const onClick = (): void => {
      handleSelectMonth(index)
    }

    const handleMouseMoveFromMonth = (): void => {
      if (isDisabled || isIosDevice()) return
      if (index === monthToDisplay) return
      setMonthToDisplay(index)
    }

    return (
      // Ignoring error: "The attribute aria-selected is not supported by the role button. This role is implicit on the element button."
      // Ignoring because this attribute is present in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1340)
      // eslint-disable-next-line jsx-a11y/role-supports-aria-props
      <button
        type="button"
        key={`selectMonth_${month}`}
        ref={isFocused ? focusedMonthEl : null}
        tabIndex={tabIndex}
        className={classes}
        data-value={index}
        data-label={month}
        aria-selected={isSelected}
        disabled={isDisabled}
        onClick={onClick}
        onKeyDown={handleKeyDownFromMonth}
        onMouseMove={handleMouseMoveFromMonth}>
        {month}
      </button>
    )
  })

  return (
    // Ignoring error: "Static HTML elements with event handlers require a role."
    // Ignoring because this element does not have a role in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1345)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      tabIndex={-1}
      data-testid="calendar-month-picker"
      className="usa-date-picker__calendar__month-picker"
      ref={monthPickerEl}
      onKeyDown={handleMonthPickerTab}>
      <table className="usa-date-picker__calendar__table" role="presentation">
        <tbody>{listToTable(months, 3)}</tbody>
      </table>
    </div>
  )
}

MonthPicker.displayName = 'MonthPicker'

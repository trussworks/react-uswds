import React, { useState, useRef, useEffect, KeyboardEvent } from 'react'

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
  listToTable,
  setMonth,
  setYear,
  min,
  max,
  subDays,
  subWeeks,
  addWeeks,
  endOfWeek,
  handleTabKey,
} from './utils'

const CalendarModes = {
  DATE_PICKER: 'DATE_PICKER',
  MONTH_PICKER: 'MONTH_PICKER',
  YEAR_PICKER: 'YEAR_PICKER',
} as const

type CalendarMode = typeof CalendarModes[keyof typeof CalendarModes]

import { Day } from './Day'
import { MonthPicker } from './MonthPicker'
import { YearPicker } from './YearPicker'
import { FocusMode } from './DatePicker'

export const Calendar = ({
  date,
  selectedDate,
  handleSelectDate,
  minDate,
  maxDate,
  rangeDate,
  setStatuses,
  focusMode,
}: {
  date?: Date
  selectedDate?: Date
  handleSelectDate: (value: string) => void
  minDate: Date
  maxDate?: Date
  rangeDate?: Date
  setStatuses: (statuses: string[]) => void
  focusMode: FocusMode
}): React.ReactElement => {
  const prevYearEl = useRef<HTMLButtonElement>(null)
  const prevMonthEl = useRef<HTMLButtonElement>(null)
  const nextMonthEl = useRef<HTMLButtonElement>(null)
  const nextYearEl = useRef<HTMLButtonElement>(null)
  const selectMonthEl = useRef<HTMLButtonElement>(null)
  const selectYearEl = useRef<HTMLButtonElement>(null)
  const focusedDayEl = useRef<HTMLButtonElement>(null)
  const datePickerEl = useRef<HTMLDivElement>(null)

  const [dateToDisplay, setDateToDisplay] = useState(date || today())
  const [mode, setMode] = useState<CalendarMode>(CalendarModes.DATE_PICKER)
  const [nextToFocus, setNextToFocus] = useState<
    [HTMLButtonElement | null, HTMLDivElement | null]
  >([null, null])

  const handleSelectMonth = (monthIndex: number): void => {
    let newDate = setMonth(dateToDisplay, monthIndex)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    setMode(CalendarModes.DATE_PICKER)
  }

  const handleSelectYear = (year: number): void => {
    let newDate = setYear(dateToDisplay, year)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    setMode(CalendarModes.DATE_PICKER)
  }

  useEffect(() => {
    // Update displayed date when input changes (only if viewing date picker - otherwise an effect loop will occur)
    if (date && mode === CalendarModes.DATE_PICKER) {
      setDateToDisplay(date)
    }
  }, [date])

  useEffect(() => {
    if (focusMode !== FocusMode.Input) {
      const [focusEl, fallbackFocusEl] = nextToFocus

      if (focusEl && fallbackFocusEl) {
        if (focusEl.disabled) {
          fallbackFocusEl.focus()
        } else {
          focusEl.focus()
        }
        setNextToFocus([null, null])
      } else {
        // Focus on new date when it changes
        const focusedDate =
          datePickerEl.current &&
          datePickerEl.current.querySelector<HTMLElement>(
            '.usa-date-picker__calendar__date--focused'
          )

        if (focusedDate) {
          focusedDate.focus()
        }
      }
    }
  }, [dateToDisplay])

  if (mode === CalendarModes.MONTH_PICKER) {
    return (
      <MonthPicker
        date={dateToDisplay}
        minDate={minDate}
        maxDate={maxDate}
        handleSelectMonth={handleSelectMonth}
      />
    )
  } else if (mode === CalendarModes.YEAR_PICKER) {
    return (
      <YearPicker
        date={dateToDisplay}
        minDate={minDate}
        maxDate={maxDate}
        handleSelectYear={handleSelectYear}
        setStatuses={setStatuses}
      />
    )
  }

  const focusedDate = addDays(dateToDisplay, 0)
  const focusedMonth = dateToDisplay.getMonth()
  const focusedYear = dateToDisplay.getFullYear()

  const prevMonth = subMonths(dateToDisplay, 1)
  const nextMonth = addMonths(dateToDisplay, 1)

  const firstOfMonth = startOfMonth(dateToDisplay)
  const prevButtonsDisabled = isSameMonth(dateToDisplay, minDate)
  const nextButtonsDisabled = maxDate && isSameMonth(dateToDisplay, maxDate)

  const rangeConclusionDate = selectedDate || dateToDisplay
  const rangeStartDate = rangeDate && min(rangeConclusionDate, rangeDate)
  const rangeEndDate = rangeDate && max(rangeConclusionDate, rangeDate)

  const withinRangeStartDate = rangeStartDate && addDays(rangeStartDate, 1)
  const withinRangeEndDate = rangeEndDate && subDays(rangeEndDate, 1)

  const handleDatePickerTab = (event: KeyboardEvent): void => {
    handleTabKey(event, [
      prevYearEl?.current,
      prevMonthEl?.current,
      selectMonthEl?.current,
      selectYearEl?.current,
      nextMonthEl?.current,
      nextYearEl?.current,
      focusedDayEl?.current,
    ])
  }

  const handleKeyDownFromDay = (event: KeyboardEvent): void => {
    let newDisplayDate
    switch (event.key) {
      case 'ArrowUp':
      case 'Up':
        newDisplayDate = subWeeks(dateToDisplay, 1)
        break
      case 'ArrowDown':
      case 'Down':
        newDisplayDate = addWeeks(dateToDisplay, 1)
        break
      case 'ArrowLeft':
      case 'Left':
        newDisplayDate = subDays(dateToDisplay, 1)
        break
      case 'ArrowRight':
      case 'Right':
        newDisplayDate = addDays(dateToDisplay, 1)
        break
      case 'Home':
        newDisplayDate = startOfWeek(dateToDisplay)
        break
      case 'End':
        newDisplayDate = endOfWeek(dateToDisplay)
        break
      case 'PageDown':
        if (event.shiftKey) {
          newDisplayDate = addYears(dateToDisplay, 1)
        } else {
          newDisplayDate = addMonths(dateToDisplay, 1)
        }
        break
      case 'PageUp':
        if (event.shiftKey) {
          newDisplayDate = subYears(dateToDisplay, 1)
        } else {
          newDisplayDate = subMonths(dateToDisplay, 1)
        }
        break
      default:
        return
    }

    if (newDisplayDate !== undefined) {
      const cappedDate = keepDateBetweenMinAndMax(
        newDisplayDate,
        minDate,
        maxDate
      )
      if (!isSameDay(dateToDisplay, cappedDate)) {
        setDateToDisplay(newDisplayDate)
      }
    }

    event.preventDefault()
  }

  const handleMouseMoveFromDay = (hoverDate: Date): void => {
    if (hoverDate === dateToDisplay) return

    setDateToDisplay(hoverDate)
  }

  const handlePreviousYearClick = (): void => {
    let newDate = subYears(dateToDisplay, 1)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    setNextToFocus([prevYearEl.current, datePickerEl.current])
  }

  const handlePreviousMonthClick = (): void => {
    let newDate = subMonths(dateToDisplay, 1)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    setNextToFocus([prevMonthEl.current, datePickerEl.current])
  }

  const handleNextMonthClick = (): void => {
    let newDate = addMonths(dateToDisplay, 1)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    setNextToFocus([nextMonthEl.current, datePickerEl.current])
  }

  const handleNextYearClick = (): void => {
    let newDate = addYears(dateToDisplay, 1)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setDateToDisplay(newDate)
    setNextToFocus([nextYearEl.current, datePickerEl.current])
  }

  const handleToggleMonthSelection = (): void => {
    setMode(CalendarModes.MONTH_PICKER)
    setStatuses(['Select a month.'])
  }

  const handleToggleYearSelection = (): void => {
    setMode(CalendarModes.YEAR_PICKER)
  }

  const monthLabel = MONTH_LABELS[focusedMonth]

  const days = []

  let dateIterator = startOfWeek(firstOfMonth)
  while (
    days.length < 28 ||
    dateIterator.getMonth() === focusedMonth ||
    days.length % 7 !== 0
  ) {
    const isFocused = isSameDay(dateIterator, focusedDate)

    days.push(
      <Day
        date={dateIterator}
        onClick={handleSelectDate}
        onKeyDown={handleKeyDownFromDay}
        onMouseMove={handleMouseMoveFromDay}
        ref={isFocused ? focusedDayEl : null}
        isDisabled={!isDateWithinMinAndMax(dateIterator, minDate, maxDate)}
        isSelected={selectedDate && isSameDay(dateIterator, selectedDate)}
        isFocused={isFocused}
        isPrevMonth={isSameMonth(dateIterator, prevMonth)}
        isFocusedMonth={isSameMonth(dateIterator, focusedDate)}
        isNextMonth={isSameMonth(dateIterator, nextMonth)}
        isToday={isSameDay(dateIterator, today())}
        isRangeDate={rangeDate && isSameDay(dateIterator, rangeDate)}
        isRangeStart={rangeStartDate && isSameDay(dateIterator, rangeStartDate)}
        isRangeEnd={rangeEndDate && isSameDay(dateIterator, rangeEndDate)}
        isWithinRange={
          withinRangeStartDate &&
          withinRangeEndDate &&
          isDateWithinMinAndMax(
            dateIterator,
            withinRangeStartDate,
            withinRangeEndDate
          )
        }
      />
    )
    dateIterator = addDays(dateIterator, 1)
  }

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div
      tabIndex={-1}
      className="usa-date-picker__calendar__date-picker"
      data-testid="calendar-date-picker"
      ref={datePickerEl}
      onKeyDown={handleDatePickerTab}>
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
            ref={prevMonthEl}
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
            onClick={handleToggleMonthSelection}
            ref={selectMonthEl}
            className="usa-date-picker__calendar__month-selection"
            aria-label={`${monthLabel}. Click to select month`}>
            {monthLabel}
          </button>
          <button
            type="button"
            data-testid="select-year"
            onClick={handleToggleYearSelection}
            ref={selectYearEl}
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
            ref={nextMonthEl}
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
            ref={nextYearEl}
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

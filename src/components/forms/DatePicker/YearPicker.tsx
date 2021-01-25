import React, { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'

import { YEAR_CHUNK } from './constants'
import {
  isDatesYearOutsideMinOrMax,
  keepDateBetweenMinAndMax,
  listToTable,
  setYear,
} from './utils'

export const YearPicker = ({
  date,
  minDate,
  maxDate,
  handleSelectYear,
  setStatuses,
}: {
  date: Date
  minDate: Date
  maxDate?: Date
  handleSelectYear: (year: number) => void
  setStatuses: (statuses: string[]) => void
}): React.ReactElement => {
  const prevYearChunkEl = useRef<HTMLButtonElement>(null)
  const nextYearChunkEl = useRef<HTMLButtonElement>(null)
  const yearPickerEl = useRef<HTMLDivElement>(null)

  const selectedYear = date.getFullYear()

  const [yearToDisplay, setYearToDisplay] = useState(selectedYear)
  const [focusedYear, setFocusedYear] = useState(yearToDisplay)
  const [nextToFocus, setNextToFocus] = useState<
    [HTMLButtonElement | null, HTMLDivElement | null]
  >([null, null])

  let yearToChunk = focusedYear
  yearToChunk -= yearToChunk % YEAR_CHUNK
  yearToChunk = Math.max(0, yearToChunk)

  const prevYearChunkDisabled = isDatesYearOutsideMinOrMax(
    setYear(date, yearToChunk - 1),
    minDate,
    maxDate
  )
  const nextYearChunkDisabled = isDatesYearOutsideMinOrMax(
    setYear(date, yearToChunk + YEAR_CHUNK),
    minDate,
    maxDate
  )

  useEffect(() => {
    // update status text when year chunk changes
    const statusStr = `Showing years ${yearToChunk} to ${
      yearToChunk + YEAR_CHUNK - 1
    }. Select a year.`
    setStatuses([statusStr])

    // also focus on next element
    const [focusEl, fallbackFocusEl] = nextToFocus

    if (focusEl && fallbackFocusEl) {
      if (focusEl.disabled) {
        fallbackFocusEl.focus()
      } else {
        focusEl.focus()
      }
      setNextToFocus([null, null])
    }
  }, [yearToDisplay])

  useEffect(() => {
    // focus on year button on mount
    const yearToFocus =
      yearPickerEl.current &&
      yearPickerEl.current.querySelector<HTMLButtonElement>(
        `[data-value="${focusedYear}"]`
      )
    if (yearToFocus) yearToFocus.focus()
  }, [])

  const years = []
  let yearIndex = yearToChunk
  while (years.length < YEAR_CHUNK) {
    const yearIterator = yearIndex
    const isDisabled = isDatesYearOutsideMinOrMax(
      setYear(date, yearIndex),
      minDate,
      maxDate
    )

    const isSelected = yearIndex === selectedYear
    const isFocused = yearIndex === focusedYear
    const tabIndex = isFocused ? 0 : -1

    const classes = classnames('usa-date-picker__calendar__year', {
      'usa-date-picker__calendar__year--selected': isSelected,
      'usa-date-picker__calendar__year--focused': isFocused,
    })

    const onClick = (): void => {
      handleSelectYear(yearIterator)
    }

    years.push(
      // eslint-disable-next-line jsx-a11y/role-supports-aria-props
      <button
        type="button"
        tabIndex={tabIndex}
        className={classes}
        data-value={yearIndex}
        aria-selected={isSelected}
        disabled={isDisabled}
        onClick={onClick}>
        {yearIndex}
      </button>
    )

    yearIndex += 1
  }

  const handlePreviousYearChunkClick = (): void => {
    let adjustedYear = yearToDisplay - YEAR_CHUNK
    adjustedYear = Math.max(0, adjustedYear)

    let newDate = setYear(date, adjustedYear)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setNextToFocus([prevYearChunkEl.current, yearPickerEl.current])
    setYearToDisplay(newDate.getFullYear())
    setFocusedYear(newDate.getFullYear())
  }

  const handleNextYearChunkClick = (): void => {
    let adjustedYear = yearToDisplay + YEAR_CHUNK
    adjustedYear = Math.max(0, adjustedYear)

    let newDate = setYear(date, adjustedYear)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setNextToFocus([nextYearChunkEl.current, yearPickerEl.current])
    setYearToDisplay(newDate.getFullYear())
    setFocusedYear(newDate.getFullYear())
  }

  return (
    <div
      tabIndex={-1}
      className="usa-date-picker__calendar__year-picker"
      data-testid="calendar-year-picker"
      ref={yearPickerEl}>
      <table className="usa-date-picker__calendar__table" role="presentation">
        <tbody>
          <tr>
            <td>
              <button
                type="button"
                data-testid="previous-year-chunk"
                className="usa-date-picker__calendar__previous-year-chunk"
                aria-label={`Navigate back ${YEAR_CHUNK} years`}
                disabled={prevYearChunkDisabled}
                onClick={handlePreviousYearChunkClick}
                ref={prevYearChunkEl}>
                &nbsp;
              </button>
            </td>
            <td colSpan={3}>
              <table
                className="usa-date-picker__calendar__table"
                role="presentation">
                <tbody>{listToTable(years, 3)}</tbody>
              </table>
            </td>
            <td>
              <button
                type="button"
                data-testid="next-year-chunk"
                className="usa-date-picker__calendar__next-year-chunk"
                aria-label={`Navigate forward ${YEAR_CHUNK} years`}
                disabled={nextYearChunkDisabled}
                onClick={handleNextYearChunkClick}
                ref={nextYearChunkEl}>
                &nbsp;
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

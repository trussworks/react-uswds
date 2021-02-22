import React, { useEffect, useState, useRef, KeyboardEvent } from 'react'
import classnames from 'classnames'

import { YEAR_CHUNK } from './constants'
import {
  isDatesYearOutsideMinOrMax,
  keepDateBetweenMinAndMax,
  listToTable,
  setYear,
  isSameYear,
  handleTabKey,
  isIosDevice,
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
  const focusedYearEl = useRef<HTMLButtonElement>(null)
  const yearPickerEl = useRef<HTMLDivElement>(null)

  const selectedYear = date.getFullYear()

  const [yearToDisplay, setYearToDisplay] = useState(selectedYear)
  const [nextToFocus, setNextToFocus] = useState<
    [HTMLButtonElement | null, HTMLDivElement | null]
  >([null, null])

  let yearToChunk = yearToDisplay
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
    } else {
      // Focus on the new year when it changes
      const focusedYear =
        yearPickerEl.current &&
        yearPickerEl.current.querySelector<HTMLElement>(
          '.usa-date-picker__calendar__year--focused'
        )
      if (focusedYear) {
        focusedYear.focus()
      }
    }
  }, [yearToDisplay])

  useEffect(() => {
    // focus on year button on mount
    const yearToFocus =
      yearPickerEl.current &&
      yearPickerEl.current.querySelector<HTMLButtonElement>(
        `[data-value="${yearToDisplay}"]`
      )
    if (yearToFocus) yearToFocus.focus()
  }, [])

  const handleYearPickerTab = (event: KeyboardEvent): void => {
    handleTabKey(event, [
      prevYearChunkEl?.current,
      focusedYearEl?.current,
      nextYearChunkEl?.current,
    ])
  }

  const handleKeyDownFromYear = (event: KeyboardEvent): void => {
    let newDisplayYear
    const target = event.target as HTMLButtonElement
    const focusedYear = parseInt(target.dataset?.value || '', 10)
    const currentDate = setYear(date, focusedYear)

    switch (event.key) {
      case 'ArrowUp':
      case 'Up':
        newDisplayYear = focusedYear - 3
        break
      case 'ArrowDown':
      case 'Down':
        newDisplayYear = focusedYear + 3
        break
      case 'ArrowLeft':
      case 'Left':
        newDisplayYear = focusedYear - 1
        break
      case 'ArrowRight':
      case 'Right':
        newDisplayYear = focusedYear + 1
        break
      case 'Home':
        newDisplayYear = focusedYear - (focusedYear % 3)
        break
      case 'End':
        newDisplayYear = focusedYear + 2 - (focusedYear % 3)
        break
      case 'PageDown':
        newDisplayYear = focusedYear + YEAR_CHUNK
        break
      case 'PageUp':
        newDisplayYear = focusedYear - YEAR_CHUNK
        break
      default:
        return
    }

    if (newDisplayYear !== undefined) {
      newDisplayYear = Math.max(0, newDisplayYear)
      const newDate = setYear(date, newDisplayYear)
      const cappedDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
      if (!isSameYear(currentDate, cappedDate)) {
        setYearToDisplay(cappedDate.getFullYear())
      }
    }

    event.preventDefault()
  }

  const years = []
  let yearIndex = yearToChunk
  while (years.length < YEAR_CHUNK) {
    const yearIterator = yearIndex
    const isDisabled = isDatesYearOutsideMinOrMax(
      setYear(date, yearIterator),
      minDate,
      maxDate
    )

    const isSelected = yearIterator === selectedYear
    const isFocused = yearIterator === yearToDisplay
    const tabIndex = isFocused ? 0 : -1

    const classes = classnames('usa-date-picker__calendar__year', {
      'usa-date-picker__calendar__year--selected': isSelected,
      'usa-date-picker__calendar__year--focused': isFocused,
    })

    const onClick = (): void => {
      handleSelectYear(yearIterator)
    }

    const handleMouseMoveFromYear = (): void => {
      if (isDisabled || isIosDevice()) return
      if (yearIterator === yearToDisplay) return
      setYearToDisplay(yearIterator)
    }

    years.push(
      // Ignoring error: "The attribute aria-selected is not supported by the role button. This role is implicit on the element button."
      // Ignoring because this attribute is present in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1447)
      // eslint-disable-next-line jsx-a11y/role-supports-aria-props
      <button
        type="button"
        tabIndex={tabIndex}
        ref={isFocused ? focusedYearEl : null}
        className={classes}
        data-value={yearIterator}
        aria-selected={isSelected}
        disabled={isDisabled}
        onClick={onClick}
        onKeyDown={handleKeyDownFromYear}
        onMouseMove={handleMouseMoveFromYear}>
        {yearIterator}
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
  }

  const handleNextYearChunkClick = (): void => {
    let adjustedYear = yearToDisplay + YEAR_CHUNK
    adjustedYear = Math.max(0, adjustedYear)

    let newDate = setYear(date, adjustedYear)
    newDate = keepDateBetweenMinAndMax(newDate, minDate, maxDate)
    setNextToFocus([nextYearChunkEl.current, yearPickerEl.current])
    setYearToDisplay(newDate.getFullYear())
  }

  return (
    // Ignoring error: "Static HTML elements with event handlers require a role."
    // Ignoring because this element does not have a role in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1457)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      tabIndex={-1}
      className="usa-date-picker__calendar__year-picker"
      data-testid="calendar-year-picker"
      ref={yearPickerEl}
      onKeyDown={handleYearPickerTab}>
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

YearPicker.displayName = 'YearPicker'

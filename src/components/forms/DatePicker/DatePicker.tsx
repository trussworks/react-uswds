import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'

import {
  DEFAULT_EXTERNAL_DATE_FORMAT,
  VALIDATION_MESSAGE,
  DEFAULT_MIN_DATE,
} from './constants'
import { formatDate, parseDateString, isDateInvalid } from './utils'
import { Calendar } from './Calendar'

interface DatePickerProps {
  id: string
  name: string
  className?: string
  disabled?: boolean
  defaultValue?: string
  minDate: string
  maxDate?: string
}

export const DatePicker = (
  props: DatePickerProps & JSX.IntrinsicElements['input']
): React.ReactElement => {
  const {
    id,
    name,
    defaultValue,
    disabled,
    minDate = DEFAULT_MIN_DATE,
    maxDate,
  } = props

  const datePickerEl = useRef<HTMLDivElement>(null)
  const externalInputEl = useRef<HTMLInputElement>(null)

  const [internalValue, setInternalValue] = useState('')
  const [externalValue, setExternalValue] = useState('')
  const [showCalendar, setShowCalendar] = useState(false)
  const [calendarDisplayValue, setCalendarDisplayValue] = useState<
    Date | undefined
  >(undefined)
  const [calendarPosY, setCalendarPosY] = useState<number | undefined>(0)

  const parsedMinDate = parseDateString(minDate) as Date
  const parsedMaxDate = maxDate ? parseDateString(maxDate) : undefined

  const validateInput = (): void => {
    const isInvalid = isDateInvalid(externalValue, parsedMinDate, parsedMaxDate)

    if (isInvalid && !externalInputEl?.current?.validationMessage) {
      externalInputEl?.current?.setCustomValidity(VALIDATION_MESSAGE)
    }

    if (
      !isInvalid &&
      externalInputEl?.current?.validationMessage === VALIDATION_MESSAGE
    ) {
      externalInputEl?.current?.setCustomValidity('')
    }
  }

  const handleSelectDate = (dateString: string, closeCalendar = true): void => {
    const parsedValue = parseDateString(dateString)
    const formattedValue =
      parsedValue && formatDate(parsedValue, DEFAULT_EXTERNAL_DATE_FORMAT)

    if (parsedValue) setInternalValue(dateString)
    if (formattedValue) setExternalValue(formattedValue)

    if (closeCalendar) {
      setShowCalendar(false)
      externalInputEl?.current?.focus()
    }
  }

  useEffect(() => {
    // TODO - test this only happens on mount
    if (defaultValue) {
      handleSelectDate(defaultValue, false)
    }
  }, [])

  useEffect(() => {
    // focus on selected date when open
    if (showCalendar) {
      const focusedDate =
        datePickerEl.current &&
        datePickerEl.current.querySelector<HTMLElement>(
          '.usa-date-picker__calendar__date--focused'
        )

      if (focusedDate) {
        focusedDate.focus()
      }
    }
  }, [showCalendar])

  useEffect(() => {
    validateInput()
  }, [externalValue, minDate, maxDate])

  const handleToggleClick = (): void => {
    // test if disabled
    // TODO get date to display when opened (default to today) - write tests

    if (showCalendar) {
      // calendar is open, hide it
    } else {
      // calendar is closed, show it

      const parsedValue = parseDateString(
        externalValue,
        DEFAULT_EXTERNAL_DATE_FORMAT,
        true
      )

      // TODO - keep parsedValue (inputDate) between min/max

      if (parsedValue) setCalendarDisplayValue(parsedValue)

      setCalendarPosY(datePickerEl?.current?.offsetHeight)
    }

    setShowCalendar(!showCalendar)

    // TODO update statuses
  }

  const datePickerClasses = classnames(
    'usa-date-picker',
    'usa-date-picker--initialized',
    {
      'usa-date-picker--active': showCalendar,
    }
  )

  return (
    <div
      data-testid="date-picker"
      className={datePickerClasses}
      ref={datePickerEl}>
      <input
        name={name}
        data-testid="date-picker-internal-input"
        className="usa-input usa-sr-only usa-date-picker__internal-input"
        type="text"
        aria-hidden={true}
        tabIndex={-1}
        required={false}
        disabled={false}
        value={internalValue}
      />
      <div className="usa-date-picker__wrapper" tabIndex={-1}>
        <input
          id={id}
          data-testid="date-picker-external-input"
          className="usa-input usa-date-picker__external-input"
          type="text"
          disabled={disabled}
          value={externalValue}
          ref={externalInputEl}
        />
        <button
          data-testid="date-picker-button"
          type="button"
          className="usa-date-picker__button"
          aria-haspopup={true}
          aria-label="Toggle calendar"
          disabled={disabled}
          onClick={handleToggleClick}>
          &nbsp;
        </button>
        <div
          data-testid="date-picker-calendar"
          className="usa-date-picker__calendar"
          role="dialog"
          aria-modal="true"
          hidden={!showCalendar}
          data-value={calendarDisplayValue && formatDate(calendarDisplayValue)}
          style={{ top: `${calendarPosY}px` }}>
          {showCalendar && (
            <Calendar
              date={calendarDisplayValue}
              handleSelectDate={handleSelectDate}
            />
          )}
        </div>
        <div
          data-testid="date-picker-status"
          className="usa-sr-only usa-date-picker__status"
          role="status"
          aria-live="polite"></div>
      </div>
    </div>
  )
}

DatePicker.defaultProps = {
  minDate: DEFAULT_MIN_DATE,
}

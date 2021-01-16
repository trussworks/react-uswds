import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'

import { DEFAULT_EXTERNAL_DATE_FORMAT } from './constants'
import { formatDate, parseDateString } from './utils'
import { Calendar } from './Calendar'

interface DatePickerProps {
  id: string
  name: string
  className?: string
  disabled?: boolean
  defaultValue?: string
}

export const DatePicker = (
  props: DatePickerProps & JSX.IntrinsicElements['input']
): React.ReactElement => {
  const { id, name, defaultValue, disabled } = props
  // TODO min date, max date

  const datePickerEl = useRef<HTMLDivElement>(null)

  const [internalValue, setInternalValue] = useState('')
  const [externalValue, setExternalValue] = useState('')
  const [showCalendar, setShowCalendar] = useState(false)
  const [calendarDisplayValue, setCalendarDisplayValue] = useState<
    Date | undefined
  >(undefined)
  const [calendarPosY, setCalendarPosY] = useState<number | undefined>(0)

  useEffect(() => {
    if (defaultValue) {
      const parsedValue = parseDateString(defaultValue)
      const formattedValue =
        parsedValue && formatDate(parsedValue, DEFAULT_EXTERNAL_DATE_FORMAT)

      if (parsedValue) setInternalValue(defaultValue)
      if (formattedValue) setExternalValue(formattedValue)
      // TODO - validate input on mount if default value is passed
    }
  }, [defaultValue])

  const handleToggleClick = (): void => {
    // test if disabled
    // TODO get date to display when opened (default to today) - write tests

    const parsedValue = parseDateString(
      externalValue,
      DEFAULT_EXTERNAL_DATE_FORMAT,
      true
    )

    if (parsedValue) setCalendarDisplayValue(parsedValue)

    setCalendarPosY(datePickerEl?.current?.offsetHeight)
    setShowCalendar(!showCalendar)

    // TODO focus date when opened
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
        defaultValue={internalValue}
      />
      <div className="usa-date-picker__wrapper" tabIndex={-1}>
        <input
          id={id}
          data-testid="date-picker-external-input"
          className="usa-input usa-date-picker__external-input"
          type="text"
          disabled={disabled}
          value={externalValue}
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
          {showCalendar && <Calendar date={calendarDisplayValue} />}
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

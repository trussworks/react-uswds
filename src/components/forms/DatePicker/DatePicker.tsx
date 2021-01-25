import React, { useState, useEffect, useRef, FormEvent } from 'react'
import classnames from 'classnames'

import {
  DEFAULT_EXTERNAL_DATE_FORMAT,
  VALIDATION_MESSAGE,
  DEFAULT_MIN_DATE,
} from './constants'
import {
  formatDate,
  parseDateString,
  isDateInvalid,
  today,
  keepDateBetweenMinAndMax,
  isSameDay,
  addDays,
} from './utils'
import { Calendar } from './Calendar'

interface DatePickerProps {
  id: string
  name: string
  className?: string
  disabled?: boolean
  defaultValue?: string
  minDate: string
  maxDate?: string
  rangeDate?: string
}

export enum FocusMode {
  None,
  Input,
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
    rangeDate,
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
  const [statuses, setStatuses] = useState<string[]>([])
  const [focusMode, setFocusMode] = useState<FocusMode>(FocusMode.None)

  const parsedMinDate = parseDateString(minDate) as Date
  const parsedMaxDate = maxDate ? parseDateString(maxDate) : undefined
  const parsedRangeDate = rangeDate ? parseDateString(rangeDate) : undefined

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
      setStatuses([])
      externalInputEl?.current?.focus()
    }
  }

  const handleExternalInput = (event: FormEvent<HTMLInputElement>): void => {
    // Keep external & internal input values in sync
    const value = (event.target as HTMLInputElement).value
    setExternalValue(value)

    const inputDate = parseDateString(value, DEFAULT_EXTERNAL_DATE_FORMAT, true)
    let newValue = ''
    if (inputDate && !isDateInvalid(value, parsedMinDate, parsedMaxDate)) {
      newValue = formatDate(inputDate)
    }

    if (internalValue !== newValue) {
      setInternalValue(newValue)
    }

    if (inputDate && showCalendar) {
      const newCalendarDate = keepDateBetweenMinAndMax(
        inputDate,
        parsedMinDate,
        parsedMaxDate
      )
      setCalendarDisplayValue(newCalendarDate)
    }
  }

  useEffect(() => {
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
    // TODO - when should this happen actually? onBlur?
    validateInput()
  }, [externalValue, minDate, maxDate])

  const handleToggleClick = (): void => {
    if (showCalendar) {
      // calendar is open, hide it
      setStatuses([])
    } else {
      // calendar is closed, show it
      const inputDate = parseDateString(
        externalValue,
        DEFAULT_EXTERNAL_DATE_FORMAT,
        true
      )

      const displayDate = keepDateBetweenMinAndMax(
        inputDate || (defaultValue && parseDateString(defaultValue)) || today(),
        parsedMinDate,
        parsedMaxDate
      )

      setCalendarDisplayValue(displayDate)
      setCalendarPosY(datePickerEl?.current?.offsetHeight)

      const statuses = [
        'You can navigate by day using left and right arrows',
        'Weeks by using up and down arrows',
        'Months by using page up and page down keys',
        'Years by using shift plus page up and shift plus page down',
        'Home and end keys navigate to the beginning and end of a week',
      ]

      const selectedDate = parseDateString(internalValue)
      if (selectedDate && isSameDay(selectedDate, addDays(displayDate, 0))) {
        statuses.unshift('Selected date')
      }

      setStatuses(statuses)
    }

    setShowCalendar(!showCalendar)
  }

  // TODO - we need React 17
  // https://github.com/facebook/react/issues/6410
  const handleFocusOut = ({
    relatedTarget,
  }: {
    relatedTarget: HTMLDivElement
  }): void => {
    if (!datePickerEl.current?.contains(relatedTarget)) {
      if (showCalendar) {
        setShowCalendar(false)
        setStatuses([])
      }
    }
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
          onInput={handleExternalInput}
          onFocus={(): void => {
            setFocusMode(FocusMode.Input)
          }}
          onBlur={(): void => {
            setFocusMode(FocusMode.None)
          }}
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
              minDate={parsedMinDate}
              maxDate={parsedMaxDate}
              rangeDate={parsedRangeDate}
              selectedDate={parseDateString(internalValue)}
              setStatuses={setStatuses}
              focusMode={focusMode}
            />
          )}
        </div>
        <div
          data-testid="date-picker-status"
          className="usa-sr-only usa-date-picker__status"
          role="status"
          aria-live="polite">
          {statuses.join('. ')}
        </div>
      </div>
    </div>
  )
}

DatePicker.defaultProps = {
  minDate: DEFAULT_MIN_DATE,
}

import React, {
  useState,
  useEffect,
  useRef,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
} from 'react'
import classnames from 'classnames'

import {
  DEFAULT_EXTERNAL_DATE_FORMAT,
  VALIDATION_MESSAGE,
  DEFAULT_MIN_DATE,
} from './constants'
import { DatePickerLocalization, EN_US } from './i18n'
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

interface BaseDatePickerProps {
  id: string
  name: string
  className?: string
  disabled?: boolean
  required?: boolean
  defaultValue?: string
  minDate?: string
  maxDate?: string
  rangeDate?: string
  onChange?: (val?: string) => void
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>
  ) => void
  i18n?: DatePickerLocalization
}

export type DatePickerProps = BaseDatePickerProps &
  Omit<JSX.IntrinsicElements['input'], 'onChange'>

export enum FocusMode {
  None,
  Input,
}

export const DatePicker = ({
  id,
  name,
  className,
  defaultValue,
  disabled,
  required,
  minDate = DEFAULT_MIN_DATE,
  maxDate,
  rangeDate,
  onChange,
  onBlur,
  i18n = EN_US,
  ...inputProps
}: DatePickerProps): React.ReactElement => {
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
  const [keydownKeyCode, setKeydownKeyCode] = useState<number | undefined>(
    undefined
  )

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
    if (onChange) onChange(formattedValue)

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
    if (onChange) onChange(value)

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

      const statuses = i18n.statuses

      const selectedDate = parseDateString(internalValue)
      if (selectedDate && isSameDay(selectedDate, addDays(displayDate, 0))) {
        const selectedDateText = i18n.selectedDate
        statuses.unshift(selectedDateText)
      }

      setStatuses(statuses)
    }

    setShowCalendar(!showCalendar)
  }

  // This is why the DatePicker requires React 17
  const handleFocusOut = (event: FocusEvent<HTMLDivElement>): void => {
    if (!datePickerEl.current?.contains(event?.relatedTarget as Element)) {
      if (showCalendar) {
        setShowCalendar(false)
        setStatuses([])
      }

      if (onBlur) onBlur(event)
    }
  }

  const handleEscapeKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      if (showCalendar) {
        setShowCalendar(false)
        setStatuses([])
        externalInputEl?.current?.focus()
      }
      event.preventDefault()
    }
  }

  const handleCalendarKeydown = (event: KeyboardEvent): void => {
    setKeydownKeyCode(event.keyCode)
  }

  const handleCalendarKeyup = (event: KeyboardEvent): void => {
    if (event.keyCode !== keydownKeyCode) event.preventDefault()
  }

  const datePickerClasses = classnames(
    'usa-date-picker',
    'usa-date-picker--initialized',
    {
      'usa-date-picker--active': showCalendar,
    },
    className
  )

  const toggleCalendar = i18n.toggleCalendar

  return (
    // Ignoring error: "Static HTML elements with event handlers require a role."
    // Ignoring because this element does not have a role in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L828)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      data-testid="date-picker"
      className={datePickerClasses}
      ref={datePickerEl}
      onBlur={handleFocusOut}
      onKeyDown={handleEscapeKey}>
      <input
        {...inputProps}
        name={name}
        data-testid="date-picker-internal-input"
        className="usa-input usa-sr-only usa-date-picker__internal-input"
        type="text"
        aria-hidden={true}
        tabIndex={-1}
        required={false}
        disabled={false}
        value={internalValue}
        readOnly
      />
      <div className="usa-date-picker__wrapper" tabIndex={-1}>
        <input
          {...inputProps}
          id={id}
          data-testid="date-picker-external-input"
          className="usa-input usa-date-picker__external-input"
          type="text"
          disabled={disabled}
          required={required}
          value={externalValue}
          ref={externalInputEl}
          onInput={handleExternalInput}
          onFocus={(): void => {
            setFocusMode(FocusMode.Input)
          }}
          onBlur={(e): void => {
            setFocusMode(FocusMode.None)
            onBlur && onBlur(e)
          }}
        />
        <button
          data-testid="date-picker-button"
          type="button"
          className="usa-date-picker__button"
          aria-haspopup={true}
          aria-label={toggleCalendar}
          disabled={disabled}
          onClick={handleToggleClick}>
          &nbsp;
        </button>
        {/* Ignoring error: "Non-interactive elements should not be assigned mouse or keyboard event listeners." */}
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <div
          data-testid="date-picker-calendar"
          className="usa-date-picker__calendar"
          role="dialog"
          aria-modal="true"
          hidden={!showCalendar}
          data-value={calendarDisplayValue && formatDate(calendarDisplayValue)}
          style={{ top: `${calendarPosY}px` }}
          onKeyDown={handleCalendarKeydown}
          onKeyUp={handleCalendarKeyup}>
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
              i18n={i18n}
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

DatePicker.displayName = 'DatePicker'

DatePicker.defaultProps = {
  minDate: DEFAULT_MIN_DATE,
}

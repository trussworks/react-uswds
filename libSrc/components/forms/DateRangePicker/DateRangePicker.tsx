import classnames from 'classnames'
import React, { useState } from 'react'
import { DEFAULT_EXTERNAL_DATE_FORMAT } from '../datepicker/constants.js'
import DatePicker, {
  type DatePickerProps,
} from '../datepicker/DatePicker/DatePicker.js'
import { formatDate, parseDateString } from '../datepicker/utils.js'
import FormGroup from '../FormGroup/FormGroup.js'
import Label from '../label/Label/Label.js'

export interface BaseDateRangePickerProps {
  startDateLabel?: string
  startDateHint?: string
  startDatePickerProps: Omit<DatePickerProps, 'rangeDate'>
  endDateLabel?: string
  endDateHint?: string
  endDatePickerProps: Omit<DatePickerProps, 'rangeDate'>
  className?: string
}

export type DateRangePickerProps = BaseDateRangePickerProps &
  JSX.IntrinsicElements['div']

const DateRangePicker = ({
  startDateLabel,
  startDateHint,
  startDatePickerProps,
  endDateLabel,
  endDateHint,
  endDatePickerProps,
  className,
  ...props
}: DateRangePickerProps): React.ReactElement => {
  const [startDateInternalValue, setStartDateInternalValue] = useState<
    string | undefined
  >(startDatePickerProps.defaultValue)
  const [endDateInternalValue, setEndDateInternalValue] = useState<
    string | undefined
  >(endDatePickerProps.defaultValue)

  const getMaxStartDate = (): string | undefined => {
    const { maxDate: maxStartDate } = startDatePickerProps
    const parsedMaxStartDate = maxStartDate && parseDateString(maxStartDate)
    const parsedCurrentEndDate =
      endDateInternalValue && parseDateString(endDateInternalValue)

    if (parsedCurrentEndDate && parsedMaxStartDate) {
      if (parsedCurrentEndDate.getTime() < parsedMaxStartDate.getTime()) {
        return formatDate(parsedCurrentEndDate)
      } else {
        return formatDate(parsedMaxStartDate)
      }
    } else {
      return (
        (parsedCurrentEndDate && formatDate(parsedCurrentEndDate)) ||
        (parsedMaxStartDate && formatDate(parsedMaxStartDate)) ||
        undefined
      )
    }
  }

  const getMinEndDate = (): string | undefined => {
    const { minDate: minEndDate } = endDatePickerProps
    const parsedMinEndDate = minEndDate && parseDateString(minEndDate)
    const parsedCurrentStartDate =
      startDateInternalValue && parseDateString(startDateInternalValue)

    if (parsedCurrentStartDate && parsedMinEndDate) {
      if (parsedCurrentStartDate.getTime() > parsedMinEndDate.getTime()) {
        return formatDate(parsedCurrentStartDate)
      } else {
        return formatDate(parsedMinEndDate)
      }
    } else {
      return (
        (parsedCurrentStartDate && formatDate(parsedCurrentStartDate)) ||
        (parsedMinEndDate && formatDate(parsedMinEndDate)) ||
        undefined
      )
    }
  }

  const getDatePickerOnChangeFn = (
    originalOnChangeFn: ((val?: string) => void) | undefined,
    setStateInternalValueFn: React.Dispatch<
      React.SetStateAction<string | undefined>
    >
  ): ((val?: string) => void) => {
    return (externallyFormattedValue?: string | undefined): void => {
      const parsedValue =
        externallyFormattedValue &&
        parseDateString(externallyFormattedValue, DEFAULT_EXTERNAL_DATE_FORMAT)

      if (parsedValue) {
        // The externally input and formatted value is a valid date.
        // Convert to internal format and set the internal state to
        // the selected date.
        const internallyFormattedValue = formatDate(parsedValue)
        setStateInternalValueFn(internallyFormattedValue)
      } else {
        // Externally input and formatted value is not a valid date.
        // Do not attempt to convert to internal date format.
        // Simply update internal state with the input value as received.
        setStateInternalValueFn(externallyFormattedValue)
      }

      if (originalOnChangeFn) originalOnChangeFn(externallyFormattedValue)
    }
  }

  const startDatePickerOnChange = getDatePickerOnChangeFn(
    startDatePickerProps.onChange,
    setStartDateInternalValue
  )

  const endDatePickerOnChange = getDatePickerOnChangeFn(
    endDatePickerProps.onChange,
    setEndDateInternalValue
  )

  const classes = classnames(className, 'usa-date-range-picker')
  const startDatePickerClasses = classnames(
    startDatePickerProps.className,
    'usa-date-range-picker__range-start'
  )
  const endDatePickerClasses = classnames(
    endDatePickerProps.className,
    'usa-date-range-picker__range-end'
  )

  const startDatePickerLabelId = `${startDatePickerProps.id}-label`
  const startDatePickerHintId = `${startDatePickerProps.id}-hint`

  const endDatePickerLabelId = `${endDatePickerProps.id}-label`
  const endDatePickerHintId = `${endDatePickerProps.id}-hint`

  return (
    <div className={classes} data-testid="date-range-picker" {...props}>
      <FormGroup>
        {startDateLabel && (
          <Label id={startDatePickerLabelId} htmlFor={startDatePickerProps.id}>
            {startDateLabel}
          </Label>
        )}
        {startDateHint && (
          <div className="usa-hint" id={startDatePickerHintId}>
            {startDateHint}
          </div>
        )}
        <DatePicker
          className={startDatePickerClasses}
          rangeDate={endDateInternalValue}
          {...startDatePickerProps}
          aria-labelledby={startDateLabel && startDatePickerLabelId}
          aria-describedby={startDateHint && startDatePickerHintId}
          onChange={startDatePickerOnChange}
          maxDate={getMaxStartDate()}
        />
      </FormGroup>

      <FormGroup>
        {endDateLabel && (
          <Label id={endDatePickerLabelId} htmlFor={endDatePickerProps.id}>
            {endDateLabel}
          </Label>
        )}
        {endDateHint && (
          <div className="usa-hint" id={endDatePickerHintId}>
            {endDateHint}
          </div>
        )}
        <DatePicker
          className={endDatePickerClasses}
          rangeDate={startDateInternalValue}
          {...endDatePickerProps}
          aria-labelledby={endDateLabel && endDatePickerLabelId}
          aria-describedby={endDateHint && endDatePickerHintId}
          onChange={endDatePickerOnChange}
          minDate={getMinEndDate()}
        />
      </FormGroup>
    </div>
  )
}

export default DateRangePicker

import classnames from 'classnames'
import { format } from 'prettier'
import React, { useState } from 'react'
import { DEFAULT_EXTERNAL_DATE_FORMAT, INTERNAL_DATE_FORMAT } from '../DatePicker/constants'
import { DatePicker, DatePickerProps } from '../DatePicker/DatePicker'
import { formatDate, parseDateString } from '../DatePicker/utils'

interface DateRangePickerProps {
  startDateLabel?: string
  startDateHint?: string
  startDatePickerProps: Omit<DatePickerProps, 'rangeDate'>
  endDateLabel?: string
  endDateHint?: string
  endDatePickerProps: Omit<DatePickerProps, 'rangeDate'>
  className?: string
}

export const DateRangePicker = (
  props: DateRangePickerProps & JSX.IntrinsicElements['div']
): React.ReactElement => {
  const { 
    startDateLabel,
    startDateHint,
    startDatePickerProps,
    endDateLabel,
    endDateHint,
    endDatePickerProps,
    className
  } = props

  const [
    startDateInternalValue,
    setStartDateInternalValue
  ] = useState<string | undefined>(startDatePickerProps.defaultValue)
  const [
    endDateInternalValue,
    setEndDateInternalValue
  ] = useState<string | undefined>(endDatePickerProps.defaultValue)

  const getMaxStartDate = (): string | undefined => {
    const { maxDate: maxStartDate } = startDatePickerProps
    const parsedMaxStartDate = maxStartDate && parseDateString(maxStartDate)
    const parsedCurrentEndDate = endDateInternalValue && parseDateString(endDateInternalValue)

    if (parsedCurrentEndDate && parsedMaxStartDate) {
      if (parsedCurrentEndDate.getTime() < parsedMaxStartDate.getTime()) {
        return formatDate(parsedCurrentEndDate)
      } else {
        return formatDate(parsedMaxStartDate)
      }
    } else {
      return (parsedCurrentEndDate && formatDate(parsedCurrentEndDate)) 
        || (parsedMaxStartDate && formatDate(parsedMaxStartDate)) 
        || undefined
    }
  }

  const getMinEndDate = (): string | undefined => {
    const { minDate: minEndDate } = endDatePickerProps
    const parsedMinEndDate = minEndDate && parseDateString(minEndDate)
    const parsedCurrentStartDate = startDateInternalValue && parseDateString(startDateInternalValue)

    if (parsedCurrentStartDate && parsedMinEndDate) {
      if (parsedCurrentStartDate.getTime() > parsedMinEndDate.getTime()) {
        return formatDate(parsedCurrentStartDate)
      } else {
        return formatDate(parsedMinEndDate)
      }
    } else {
      return (parsedCurrentStartDate && formatDate(parsedCurrentStartDate)) 
        || (parsedMinEndDate && formatDate(parsedMinEndDate)) 
        || undefined
    }
  }

  const getDatePickerOnChangeFn = (
    originalOnChangeFn: ((val?: string | undefined) => void) | undefined,
    setStateInternalValueFn: React.Dispatch<React.SetStateAction<string | undefined>>
  ): (val?: string | undefined) => void => {
    return (externallyFormattedValue?: string | undefined): void => {
      const parsedValue = 
        externallyFormattedValue && parseDateString(externallyFormattedValue, DEFAULT_EXTERNAL_DATE_FORMAT)
      
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

      if (originalOnChangeFn) originalOnChangeFn()
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

  return (
    <div className={classes} data-testid="date-range-picker">
      <div className="usa-form-group">
        {startDateLabel && 
        <label 
          className="usa-label" 
          id={`${startDatePickerProps.id}-label`} 
          htmlFor={startDatePickerProps.id}>
          {startDateLabel}
        </label>}
        {startDateHint && 
        <div 
          className="usa-hint" 
          id={`${startDatePickerProps.id}-hint`}>
          {startDateHint}
        </div>}
        <DatePicker
          rangeDate={endDateInternalValue} 
          { ...startDatePickerProps } 
          onChange={startDatePickerOnChange} 
          maxDate={getMaxStartDate()}
        />
      </div>

      <div className="usa-form-group">
        {endDateLabel && 
        <label 
          className="usa-label" 
          id={`${endDatePickerProps.id}-label`} 
          htmlFor={endDatePickerProps.id}>
          {endDateLabel}
        </label>}
        {endDateHint && 
        <div 
          className="usa-hint" 
          id={`${endDatePickerProps.id}-hint`}>
          {endDateHint}
        </div>}
        <DatePicker 
          rangeDate={startDateInternalValue} 
          { ...endDatePickerProps } 
          onChange={endDatePickerOnChange}
          minDate={getMinEndDate()}
        />
      </div>
    </div>
  )
}

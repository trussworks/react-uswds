import classnames from 'classnames'
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
  ] = useState<string | undefined>(startDatePickerProps.defaultValue);
  const [
    endDateInternalValue,
    setEndDateInternalValue
  ] = useState<string | undefined>(endDatePickerProps.defaultValue);
  
  const startDatePickerOnChange = (externallyFormattedValue: string | undefined): void => {
    const parsedValue = 
      externallyFormattedValue && parseDateString(externallyFormattedValue, DEFAULT_EXTERNAL_DATE_FORMAT)
    const internallyFormattedValue = 
      parsedValue && formatDate(parsedValue, INTERNAL_DATE_FORMAT)
    
    if (parsedValue) setStartDateInternalValue(internallyFormattedValue)
    if (startDatePickerProps.onChange) startDatePickerProps.onChange(externallyFormattedValue)
  }

  const endDatePickerOnChange = (externallyFormattedValue: string | undefined): void => {
    const parsedValue = 
      externallyFormattedValue && parseDateString(externallyFormattedValue, DEFAULT_EXTERNAL_DATE_FORMAT)
    const internallyFormattedValue = 
      parsedValue && formatDate(parsedValue, INTERNAL_DATE_FORMAT)
    
    if (parsedValue) setEndDateInternalValue(internallyFormattedValue)
    if (endDatePickerProps.onChange) endDatePickerProps.onChange(externallyFormattedValue)
  }

  const classes = classnames(className, 'usa-date-range-picker')
  
  return (
    <div className={classes}>
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
          onChange={startDatePickerOnChange} />
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
        <DatePicker rangeDate={startDateInternalValue} { ...endDatePickerProps } onChange={endDatePickerOnChange} />
      </div>
    </div>
  )
}
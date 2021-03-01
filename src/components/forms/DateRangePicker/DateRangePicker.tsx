import classnames from 'classnames'
import React from 'react'
import { DatePicker, DatePickerProps } from '../DatePicker/DatePicker'

interface DateRangePickerProps {
  startDateLabel?: string
  startDateHint?: string
  startDatePickerProps: DatePickerProps
  endDateLabel?: string
  endDateHint?: string
  endDatePickerProps: DatePickerProps
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
  
  const classes = classnames(className, 'usa-date-range-picker')
  
  return (
    <div className={classes}>
      <div className="usa-form-group">
        {startDateLabel && 
        <label className="usa-label" 
              id={`${startDatePickerProps.id}-label`} 
              htmlFor={startDatePickerProps.id}>
          {startDateLabel}
        </label>}
        {startDateHint && 
        <div className="usa-hint" 
            id={`${startDatePickerProps.id}-hint`}>
          {startDateHint}
        </div>}
        <DatePicker { ...startDatePickerProps } />
      </div>

      <div className="usa-form-group">
        {endDateLabel && 
        <label className="usa-label" 
               id={`${endDatePickerProps.id}-label`} 
               htmlFor={endDatePickerProps.id}>
          {endDateLabel}
        </label>}
        {endDateHint && 
        <div className="usa-hint" 
             id={`${endDatePickerProps.id}-hint`}>
          {endDateHint}
        </div>}
        <DatePicker { ...endDatePickerProps } />
      </div>
    </div>
  )
}
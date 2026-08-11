import React, { useMemo, type JSX } from 'react'
import classnames from 'classnames'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'
import { ComboBox } from '../ComboBox/ComboBox'
import { getTimeOptions, parseTimeString } from './utils'
import {
  DEFAULT_MAX_TIME,
  DEFAULT_MAX_TIME_MINUTES,
  DEFAULT_MIN_TIME,
  DEFAULT_MIN_TIME_MINUTES,
  DEFAULT_STEP,
  DEFAULT_TIME_FORMAT,
  MIN_STEP,
  TIME_PICKER_CUSTOM_FILTER,
  TIME_PICKER_CUSTOM_FILTER_24H,
} from './constants'

export type TimePickerFormat = '12h' | '24h'

type BaseTimePickerProps = {
  id: string
  name: string
  onChange: (val?: string) => void
  label: string
  defaultValue?: string
  disabled?: boolean
  minTime?: string
  maxTime?: string
  step?: number
  format?: TimePickerFormat
  /** Recommended text: "Select a time from the dropdown. Type into the input to filter options." */
  hint?: string
  className?: string
}

export type TimePickerProps = BaseTimePickerProps &
  Omit<JSX.IntrinsicElements['input'], 'onChange'>

export const TimePicker = ({
  id,
  name,
  onChange,
  label,
  defaultValue,
  disabled,
  minTime = DEFAULT_MIN_TIME,
  maxTime = DEFAULT_MAX_TIME,
  step = DEFAULT_STEP,
  format = DEFAULT_TIME_FORMAT,
  hint,
  className,
}: TimePickerProps): JSX.Element => {
  const classes = classnames('usa-time-picker', className)

  const parsedMinTime = parseTimeString(minTime) ?? DEFAULT_MIN_TIME_MINUTES
  const parsedMaxTime = parseTimeString(maxTime) ?? DEFAULT_MAX_TIME_MINUTES
  const validStep = step < MIN_STEP ? MIN_STEP : step
  const timeOptions = useMemo(
    () => getTimeOptions(parsedMinTime, parsedMaxTime, validStep, format),
    [parsedMinTime, parsedMaxTime, validStep, format]
  )

  const customFilter =
    format === '24h' ? TIME_PICKER_CUSTOM_FILTER_24H : TIME_PICKER_CUSTOM_FILTER

  const labelId = `${name}-label`
  const hintId = `${name}-hint`

  return (
    <FormGroup>
      <Label className="usa-label" id={labelId} htmlFor={id}>
        {label}
      </Label>
      {hint && (
        <div className="usa-hint" id={hintId}>
          {hint}
        </div>
      )}
      <ComboBox
        id={id}
        name={name}
        className={classes}
        onChange={onChange}
        defaultValue={defaultValue}
        options={timeOptions}
        disabled={disabled}
        customFilter={customFilter}
        disableFiltering
      />
    </FormGroup>
  )
}

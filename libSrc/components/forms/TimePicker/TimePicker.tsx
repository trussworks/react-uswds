import React, { useMemo } from 'react'
import classnames from 'classnames'
import FormGroup from '../FormGroup/FormGroup.js'
import Label from '../label/Label/Label.js'
import { type ComboBoxProps } from '../combobox/ComboBox/ComboBox.js'
import ComboBox from '../combobox/ComboBox/ComboBoxForwardRef.js'
import { getTimeOptions, parseTimeString } from './utils.js'
import {
  DEFAULT_MAX_TIME,
  DEFAULT_MAX_TIME_MINUTES,
  DEFAULT_MIN_TIME,
  DEFAULT_MIN_TIME_MINUTES,
  DEFAULT_STEP,
  MIN_STEP,
  TIME_PICKER_CUSTOM_FILTER,
} from './constants.js'

export interface BaseTimePickerProps {
  id: string
  name: string
  onChange: (val?: string) => void
  label: string
  defaultValue?: string
  disabled?: boolean
  minTime?: string
  maxTime?: string
  step?: number
  hint?: string
  className?: string
}

export type TimePickerProps = BaseTimePickerProps &
  Omit<ComboBoxProps, 'onChange' | 'options'>

const TimePicker = ({
  id,
  name,
  onChange,
  label,
  defaultValue,
  disabled,
  minTime = DEFAULT_MIN_TIME,
  maxTime = DEFAULT_MAX_TIME,
  step = DEFAULT_STEP,
  hint,
  className,
  ...props
}: TimePickerProps): React.ReactElement => {
  const classes = classnames('usa-time-picker', className)

  const parsedMinTime = parseTimeString(minTime) || DEFAULT_MIN_TIME_MINUTES
  const parsedMaxTime = parseTimeString(maxTime) || DEFAULT_MAX_TIME_MINUTES
  const validStep = step < MIN_STEP ? MIN_STEP : step
  const timeOptions = useMemo(
    () => getTimeOptions(parsedMinTime, parsedMaxTime, validStep),
    [minTime, maxTime, step]
  )

  const labelId = `${name}-label`
  const hintId = `${name}-hint`

  return (
    <FormGroup>
      <Label id={labelId} htmlFor={id}>
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
        customFilter={TIME_PICKER_CUSTOM_FILTER}
        disableFiltering
        {...props}
      />
    </FormGroup>
  )
}

export default TimePicker

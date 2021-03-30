import React, { useMemo } from 'react'
import classnames from 'classnames'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'
import { ComboBox } from '../ComboBox/ComboBox'
import { getTimes, parseTimeString } from './utils'
import {
  DEFAULT_MAX_TIME,
  DEFAULT_MAX_TIME_MINUTES,
  DEFAULT_MIN_TIME,
  DEFAULT_MIN_TIME_MINUTES,
  DEFAULT_STEP,
  MIN_STEP,
} from './constants'

interface BaseTimePickerProps {
  id: string
  label: string
  onChange: (val?: string) => void
  defaultValue?: string
  disabled?: boolean
  minTime?: string
  maxTime?: string
  step?: number
  hint?: string
  className?: string
}

type TimePickerProps = BaseTimePickerProps &
  Omit<JSX.IntrinsicElements['input'], 'onChange'>

export const TimePicker = ({
  id,
  label,
  onChange,
  defaultValue,
  disabled,
  minTime = DEFAULT_MIN_TIME,
  maxTime = DEFAULT_MAX_TIME,
  step = DEFAULT_STEP,
  hint,
  className,
}: TimePickerProps): React.ReactElement => {
  const classes = classnames('usa-time-picker', className)

  const parsedMinTime = parseTimeString(minTime) || DEFAULT_MIN_TIME_MINUTES
  const parsedMaxTime = parseTimeString(maxTime) || DEFAULT_MAX_TIME_MINUTES
  const validStep = step < MIN_STEP ? MIN_STEP : step
  const timeOptions = useMemo(
    () => getTimes(parsedMinTime, parsedMaxTime, validStep),
    [minTime, maxTime, step]
  )

  return (
    <FormGroup>
      <Label className="usa-label" id="TOOD" htmlFor={id}>
        {label}
      </Label>
      {hint && (
        <div className="usa-hint" id="TODO">
          {hint}
        </div>
      )}
      <div className={classes}>
        <ComboBox
          id={id}
          name="timepickernameTODO"
          onChange={onChange}
          defaultValue={defaultValue}
          options={timeOptions}
          disabled={disabled}
        />
      </div>
    </FormGroup>
  )
}

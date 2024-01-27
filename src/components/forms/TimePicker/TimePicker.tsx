import React, { forwardRef, useMemo } from 'react'
import classnames from 'classnames'
import FormGroup from '../FormGroup/FormGroup'
import Label from '../Label/Label'
import ComboBox, { ComboBoxProps } from '../ComboBox/ComboBox'
import { getTimeOptions, parseTimeString } from './utils'
import {
  DEFAULT_MAX_TIME,
  DEFAULT_MAX_TIME_MINUTES,
  DEFAULT_MIN_TIME,
  DEFAULT_MIN_TIME_MINUTES,
  DEFAULT_STEP,
  MIN_STEP,
  TIME_PICKER_CUSTOM_FILTER,
} from './constants'

export type BaseTimePickerProps = {
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
  inputProps?: React.PropsWithRef<ComboBoxProps>
}

export type TimePickerProps = React.ComponentPropsWithRef<typeof TimePicker>

export type TimePickerRef = React.ComponentRef<typeof TimePicker>

export const TimePickerForwardRef: React.ForwardRefRenderFunction<
  React.ComponentRef<typeof FormGroup>,
  BaseTimePickerProps &
    Omit<React.ComponentPropsWithoutRef<typeof FormGroup>, 'onChange'>
> = (
  {
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
    inputProps,
    ...props
  },
  ref
): React.ReactElement => {
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
    <FormGroup ref={ref} {...props}>
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
        customFilter={TIME_PICKER_CUSTOM_FILTER}
        disableFiltering
        {...inputProps}
      />
    </FormGroup>
  )
}

const TimePicker = forwardRef(TimePickerForwardRef)

export default TimePicker

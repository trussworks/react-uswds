import React, { useState, type JSX } from 'react'
import classnames from 'classnames'
import { LegacyInputRef } from '../../../types/legacyInputRef'

type RangeInputProps = {
  id: string
  name: string
  min?: number
  max?: number
  textPreposition?: string
  textUnit?: string
  inputRef?: LegacyInputRef
}

export const RangeInput = ({
  className,
  inputRef,
  textPreposition,
  textUnit,
  ...inputProps
}: RangeInputProps & JSX.IntrinsicElements['input']): JSX.Element => {
  const classes = classnames('usa-range', className)
  // input range defaults to min = 0, max = 100, step = 1, and value = (max/2) if not specified.
  const defaultMin = 0
  const defaultMax = 100
  const defaultVal = Math.round(defaultMax / 2)
  const defaultUnit = ''
  const defaultPreposition = 'of'
  const {
    min,
    max,
    defaultValue,
    value: valueProp,
    ...remainingInputProps
  } = inputProps
  const rangeMin = min || defaultMin
  const rangeMax = max || defaultMax
  const rangeUnit = textUnit || defaultUnit
  const rangePreposition = textPreposition || defaultPreposition
  const rangeValue =
    valueProp !== undefined
      ? valueProp
      : defaultValue !== undefined
        ? defaultValue
        : defaultVal
  const [value, setValue] = useState(rangeValue)
  const callout = `${value} ${rangeUnit} ${rangePreposition} ${rangeMax}`

  return (
    <input
      data-testid="range"
      aria-valuetext={callout}
      className={classes}
      ref={inputRef}
      type="range"
      {...remainingInputProps}
      min={rangeMin}
      max={rangeMax}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  )
}

export default RangeInput

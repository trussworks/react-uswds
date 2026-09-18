import React, { useState, type JSX } from 'react'
import classnames from 'classnames'
import { LegacyInputRef } from '../../../types/legacyInputRef'

export type RangeSliderProps = {
  id: string
  name: string
  min?: number
  max?: number
  textPreposition?: string
  textUnit?: string
  /** Set to `null` to remove default hint */
  hint?: React.ReactNode
  inputRef?: LegacyInputRef
  wrapperClassName?: string
} & JSX.IntrinsicElements['input']

export const RangeSlider = ({
  className,
  wrapperClassName,
  inputRef,
  textPreposition,
  textUnit,
  hint = 'Move the slider to change the value',
  ...inputProps
}: RangeSliderProps): JSX.Element => {
  const inputClasses = classnames('usa-range', className)
  const wrapperClasses = classnames('usa-range__wrapper', wrapperClassName)
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
  const hintId = `${inputProps.id}-hint`
  const ariaDescribedBy = [hint && hintId, inputProps['aria-describedby']]
    .filter(Boolean)
    .join(' ')
  const callout = `${value.toString()} ${rangeUnit} ${rangePreposition} ${rangeMax}`

  return (
    <>
      {hint && (
        <span className="usa-hint" id={hintId}>
          {hint}
        </span>
      )}
      <div data-testid="range-wrapper" className={wrapperClasses}>
        <input
          data-testid="range"
          aria-valuetext={callout}
          className={inputClasses}
          ref={inputRef}
          type="range"
          {...remainingInputProps}
          aria-describedby={ariaDescribedBy || undefined}
          min={rangeMin}
          max={rangeMax}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <span
          data-testid="range-visual"
          aria-hidden="true"
          className="usa-range__value">
          {value}
        </span>
      </div>
    </>
  )
}

/** @deprecated Use `RangeSlider` instead. `RangeInput` will be removed in a future major version. */
export const RangeInput = RangeSlider

/** @deprecated Use `RangeSliderProps` instead. `RangeInputProps` will be removed in a future major version. */
export type RangeInputProps = RangeSliderProps

export default RangeSlider

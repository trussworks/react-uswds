import React from 'react'
import classnames from 'classnames'

interface RangeInputProps {
  id: string
  name: string
  min?: number
  max?: number
  ariaValueMin?: number
  ariaValueMax?: number
  ariaValueNow?: number
  inputRef?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined
}

export const RangeInput = ({
  className,
  inputRef,
  ...inputProps
}: RangeInputProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const classes = classnames('usa-range', className)
  // input range defaults to min = 0, max = 100, step = 1, and value = (max/2) if not specified.
  const defaultMin = 0
  const defaultMax = 100
  const { min, max, defaultValue, ariaValueMin, ariaValueMax, ariaValueNow } =
    inputProps
  const rangeMin = min || defaultMin
  const rangeMax = max || defaultMax
  const ariaMin = ariaValueMin || rangeMin
  const ariaMax = ariaValueMax || rangeMax
  const calculatedDefaultValue =
    defaultValue ||
    (rangeMin > rangeMax ? rangeMin : rangeMin + rangeMax - rangeMax / 2)
  const convertValueType = (
    value: string | number | readonly string[]
  ): number | undefined => {
    if (typeof value === 'number' || typeof value === 'string') {
      return Number(value)
    }
    return undefined
  }
  const [ariaValue, setAriaValue] = React.useState<number | undefined>(
    convertValueType(calculatedDefaultValue)
  )
  const onValueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!ariaValueNow) setAriaValue(e.target.valueAsNumber)
  }

  return (
    <input
      data-testid="range"
      className={classes}
      ref={inputRef}
      type="range"
      {...inputProps}
      aria-valuemin={ariaMin}
      aria-valuemax={ariaMax}
      aria-valuenow={ariaValueNow || ariaValue}
      onChange={(e) => onValueChange(e)}
    />
  )
}

export default RangeInput

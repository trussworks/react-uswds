import React from 'react'
import classnames from 'classnames'

interface RangeInputProps {
  id: string
  name: string
  min?: number
  max?: number
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
  const { min, max, defaultValue } = inputProps
  const rangeMin = min || defaultMin
  const rangeMax = max || defaultMax
  const ariaMin = inputProps['aria-valuemin'] || rangeMin
  const ariaMax = inputProps['aria-valuemax'] || rangeMax
  const calculatedAriaValueNow =
    inputProps['aria-valuenow'] ||
    defaultValue ||
    (rangeMax < rangeMin ? rangeMin : rangeMin + (rangeMax - rangeMin) / 2)
  const convertValueType = (
    value: string | number | readonly string[]
  ): number | undefined => {
    if (typeof value === 'number' || typeof value === 'string') {
      return Number(value)
    }
    return undefined
  }
  const [ariaValue, setAriaValue] = React.useState<number | undefined>(
    convertValueType(calculatedAriaValueNow)
  )
  const onValueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!inputProps['aria-valuenow']) setAriaValue(e.target.valueAsNumber)
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
      aria-valuenow={ariaValue}
      onChange={(e): void => onValueChange(e)}
    />
  )
}

export default RangeInput

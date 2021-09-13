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
  const ariaMin = min || defaultMin
  const ariaMax = max || defaultMax
  const calculatedDefaultValue =
    defaultValue ||
    (ariaMax < ariaMin ? ariaMin : ariaMin + ariaMax - ariaMax / 2)
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
    setAriaValue(e.target.valueAsNumber)
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
      onChange={(e) => onValueChange(e)}
    />
  )
}

export default RangeInput

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
  // Range defaults to min = 0, max = 100, step = 1, and value = (max/2) if not specified.
  const defaultMin = 0
  const defaultMax = 100
  const { min, max, value, defaultValue } = inputProps
  const ariaMin = min || defaultMin
  const ariaMax = max || defaultMax

  let ariaValue: number | undefined
  if (typeof value === 'number') {
    ariaValue = value
  } else if (typeof value === 'undefined') {
    if (typeof defaultValue === 'undefined') {
      ariaValue = ariaMax / 2
    } else if (typeof defaultValue === 'number') {
      ariaValue = defaultValue
    }
  }

  const classes = classnames('usa-range', className)

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
    />
  )
}

export default RangeInput

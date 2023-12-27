import React from 'react'
import classnames from 'classnames'

type RangeInputProps = {
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
  const { min, max } = inputProps
  const rangeMin = min || defaultMin
  const rangeMax = max || defaultMax

  return (
    <input
      data-testid="range"
      className={classes}
      ref={inputRef}
      type="range"
      {...inputProps}
      min={rangeMin}
      max={rangeMax}
    />
  )
}

export default RangeInput

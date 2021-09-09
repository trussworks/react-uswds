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

  const classes = classnames('usa-range', className)
  const { min } = inputProps
  return (
    <input
      data-testid="range"
      className={classes}
      ref={inputRef}
      type="range"
      {...inputProps}
      aria-valuemin={min || 0}
    />
  )
}

export default RangeInput

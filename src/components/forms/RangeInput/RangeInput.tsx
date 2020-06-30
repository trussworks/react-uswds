import React from 'react'
import classnames from 'classnames'

interface RangeInputProps {
  id: string
  name: string
  inputRef?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined
}

export const RangeInput = (
  props: RangeInputProps & JSX.IntrinsicElements['input']
): React.ReactElement => {
  // Range defaults to min = 0, max = 100, step = 1, and value = (max/2) if not specified.
  const { className, inputRef, ...inputProps } = props

  const classes = classnames('usa-range', className)

  return (
    <input
      data-testid="range"
      className={classes}
      ref={inputRef}
      type="range"
      {...inputProps}
    />
  )
}

export default RangeInput

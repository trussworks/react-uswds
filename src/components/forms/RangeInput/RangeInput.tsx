import React from 'react'
import classnames from 'classnames'

import { Label } from '../Label/Label'

interface RangeInputProps {
  id?: string
  className?: string
  label?: React.ReactNode
  hint?: React.ReactNode
  inputRef?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined
}

export const RangeInput = (
  props: RangeInputProps & React.InputHTMLAttributes<HTMLInputElement>
): React.ReactElement => {
  // Range defaults to min = 0, max = 100, step = 1, and value = (max/2) if not specified.
  const {
    id = 'range-slider',
    name = 'range',
    className,
    label,
    hint,
    min,
    max,
    step,
    list,
    inputRef,
    ...inputProps
  } = props

  const classes = classnames('usa-range', className)

  return (
    <>
      {label && (
        <Label htmlFor={id} hint={hint}>
          {label}
        </Label>
      )}
      <input
        id={id}
        data-testid="range"
        name={name}
        className={classes}
        ref={inputRef}
        type="range"
        min={min}
        max={max}
        step={step}
        list={list}
        {...inputProps}
      />
    </>
  )
}

export default RangeInput

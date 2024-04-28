import React from 'react'
import classnames from 'classnames'
import type { ValidationStatus } from '../../../types/validationStatus.js'

export interface BaseSelectProps {
  name: string
  className?: string
  validationStatus?: ValidationStatus
  inputRef?:
    | string
    | ((instance: HTMLSelectElement | null) => void)
    | React.RefObject<HTMLSelectElement>
    | null
    | undefined
}

export type SelectProps = BaseSelectProps & JSX.IntrinsicElements['select']

const Select = ({
  id,
  name,
  className,
  inputRef,
  children,
  validationStatus,
  ...inputProps
}: SelectProps): React.ReactElement => {
  const isError = validationStatus === 'error'
  const isSuccess = validationStatus === 'success'
  const classes = classnames(
    'usa-select',
    {
      'usa-input--error': isError,
      'usa-input--success': isSuccess,
    },
    className
  )

  return (
    <select
      data-testid="Select"
      className={classes}
      id={id}
      name={name}
      ref={inputRef}
      {...inputProps}>
      {children}
    </select>
  )
}

export default Select

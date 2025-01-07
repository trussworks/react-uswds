import React, { JSX } from 'react'
import classnames from 'classnames'
import { ValidationStatus } from '../../../types/validationStatus'

type SelectProps = {
  id: string
  name: string
  className?: string
  children: React.ReactNode
  validationStatus?: ValidationStatus
  inputRef?: React.RefObject<HTMLSelectElement>
}

export const Select = ({
  id,
  name,
  className,
  inputRef,
  children,
  validationStatus,
  ...inputProps
}: SelectProps & JSX.IntrinsicElements['select']): React.ReactElement => {
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

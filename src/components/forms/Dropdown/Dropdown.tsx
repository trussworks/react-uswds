import React from 'react'
import classnames from 'classnames'
import { ValidationStatus } from '../../../types/validationStatus'

type DropdownProps = {
  id: string
  name: string
  className?: string
  children: React.ReactNode
  validationStatus?: ValidationStatus
  inputRef?:
    | string
    | ((instance: HTMLSelectElement | null) => void)
    | React.RefObject<HTMLSelectElement>
    | null
    | undefined
}

export const Dropdown = ({
  id,
  name,
  className,
  inputRef,
  children,
  validationStatus,
  ...inputProps
}: DropdownProps & JSX.IntrinsicElements['select']): React.ReactElement => {
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
      data-testid="dropdown"
      className={classes}
      id={id}
      name={name}
      ref={inputRef}
      {...inputProps}>
      {children}
    </select>
  )
}

export default Dropdown

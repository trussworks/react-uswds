import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { ValidationStatus } from '../../../types/validationStatus'

export type BaseSelectProps = {
  id: string
  name: string
  className?: string
  children: React.ReactNode
  validationStatus?: ValidationStatus
  /**
   * @deprecated Use ref instead
   */
  inputRef?:
    | string
    | ((instance: HTMLSelectElement | null) => void)
    | React.RefObject<HTMLSelectElement>
    | null
    | undefined
}

export type SelectProps = BaseSelectProps & JSX.IntrinsicElements['select']

export const SelectForwardRef: React.ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectProps
> = (
  { id, name, className, inputRef, children, validationStatus, ...inputProps },
  ref
): React.ReactElement => {
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
      ref={ref ?? inputRef}
      {...inputProps}>
      {children}
    </select>
  )
}

export const Select = forwardRef(SelectForwardRef)

export default Select

/*
  @deprecated Make updates to the Select component instead
  @todo Remove this component
*/

import React from 'react'
import { Select } from '../Select/Select'
import { withDeprecationWarning } from '../../hoc/withDeprecationWarning'
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
  const deprecationWarningMessage = 'Dropdown is deprecated and will be removed in the future. Please use the Select component instead.'
  const DeprecatedDropdown = withDeprecationWarning(
    Select,
    deprecationWarningMessage
  )
  return (
    <DeprecatedDropdown
      validationStatus={validationStatus}
      className={className}
      id={id}
      name={name}
      ref={inputRef}
      {...inputProps}>
      {children}
    </DeprecatedDropdown>
  )
}

export default Dropdown

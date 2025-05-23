import React, { type JSX } from 'react'
import classnames from 'classnames'
import { LegacyInputRef } from '../../../types/legacyInputRef'

export type CheckboxProps = {
  id: string
  name: string
  className?: string
  label: React.ReactNode
  inputRef?: LegacyInputRef
  tile?: boolean
  labelDescription?: React.ReactNode
} & JSX.IntrinsicElements['input']

export const Checkbox = ({
  id,
  name,
  className,
  label,
  inputRef,
  tile,
  labelDescription,
  ...inputProps
}: CheckboxProps): JSX.Element => {
  const classes = classnames('usa-checkbox', className)
  const checkboxClasses = classnames('usa-checkbox__input', {
    'usa-checkbox__input--tile': tile,
  })

  return (
    <div data-testid="checkbox" className={classes}>
      <input
        className={checkboxClasses}
        id={id}
        type="checkbox"
        name={name}
        ref={inputRef}
        {...inputProps}
      />
      <label className="usa-checkbox__label" htmlFor={id}>
        {label}
        {labelDescription && (
          <span className="usa-checkbox__label-description">
            {labelDescription}
          </span>
        )}
      </label>
    </div>
  )
}

export default Checkbox

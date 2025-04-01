import React, { type JSX } from 'react'
import classnames from 'classnames'
import { LegacyInputRef } from '../../../types/legacyInputRef'

export type RadioProps = {
  id: string
  name: string
  className?: string
  label: React.ReactNode
  inputRef?: LegacyInputRef
  tile?: boolean
  labelDescription?: React.ReactNode
} & JSX.IntrinsicElements['input']

export const Radio = ({
  id,
  name,
  className,
  label,
  inputRef,
  tile,
  labelDescription,
  ...inputProps
}: RadioProps): JSX.Element => {
  const classes = classnames('usa-radio', className)
  const radioClasses = classnames('usa-radio__input', {
    'usa-radio__input--tile': tile,
  })

  return (
    <div data-testid="radio" className={classes}>
      <input
        className={radioClasses}
        id={id}
        type="radio"
        name={name}
        ref={inputRef}
        {...inputProps}
      />
      <label className="usa-radio__label" htmlFor={id}>
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

export default Radio

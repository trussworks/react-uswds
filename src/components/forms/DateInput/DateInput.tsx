import React, { type JSX } from 'react'
import classnames from 'classnames'

import { TextInput, OptionalTextInputProps } from '../TextInput/TextInput'
import { Label } from '../Label/Label'
import { FormGroup } from '../FormGroup/FormGroup'

export type DateInputProps = {
  id: string
  name: string
  label: string
  unit: 'month' | 'day' | 'year'
  maxLength: number
  minLength?: number
  /**
   * Recommended text:
   * - Month: "Select a month from the dropdown."
   * - Day: "Enter 1 or 2 digits for the day."
   * - Year: "Enter 4 digits for the year."
   */
  srHint?: string
} & OptionalTextInputProps

export const DateInput = ({
  id,
  name,
  label,
  unit,
  maxLength,
  minLength,
  srHint,
  className,
  ...inputProps
}: DateInputProps): JSX.Element => {
  const formGroupClasses = classnames({
    'usa-form-group--month': unit == 'month',
    'usa-form-group--day': unit == 'day',
    'usa-form-group--year': unit == 'year',
  })

  const inputClasses = classnames(className)

  const hintId = `${id}-hint`
  const ariaDescribedBy = [srHint && hintId, inputProps['aria-describedby']]
    .filter(Boolean)
    .join(' ')

  return (
    <FormGroup className={formGroupClasses}>
      <Label htmlFor={id}>{label}</Label>
      {srHint && (
        <span className="usa-hint usa-sr-only" id={hintId}>
          {srHint}
        </span>
      )}
      <TextInput
        {...inputProps}
        className={inputClasses}
        id={id}
        name={name}
        type="text"
        maxLength={maxLength}
        minLength={minLength}
        pattern="[0-9]*"
        inputMode="numeric"
        aria-describedby={ariaDescribedBy || undefined}
      />
    </FormGroup>
  )
}

export default DateInput

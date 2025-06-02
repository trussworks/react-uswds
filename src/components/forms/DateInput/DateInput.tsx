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
} & OptionalTextInputProps

export const DateInput = ({
  id,
  name,
  label,
  unit,
  maxLength,
  minLength,
  className,
  ...inputProps
}: DateInputProps): JSX.Element => {
  const formGroupClasses = classnames({
    'usa-form-group--month': unit == 'month',
    'usa-form-group--day': unit == 'day',
    'usa-form-group--year': unit == 'year',
  })

  const inputClasses = classnames(className)

  return (
    <FormGroup className={formGroupClasses}>
      <Label htmlFor={id}>{label}</Label>
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
      />
    </FormGroup>
  )
}

export default DateInput

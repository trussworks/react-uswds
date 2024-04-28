import React from 'react'
import classnames from 'classnames'

import TextInput, { type TextInputProps } from '../TextInput/TextInput.js'
import Label from '../label/Label/Label.js'
import FormGroup from '../FormGroup/FormGroup.js'

export interface BaseDateInputElementProps {
  id: string
  name: string
  label: string
  unit: 'month' | 'day' | 'year'
  maxLength: number
  minLength?: number
}

export type DateInputElementProps = BaseDateInputElementProps & TextInputProps

const DateInput = ({
  id,
  name,
  label,
  unit,
  maxLength,
  minLength,
  className,
  ...inputProps
}: DateInputElementProps): React.ReactElement => {
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
        className={inputClasses}
        id={id}
        name={name}
        type="text"
        maxLength={maxLength}
        minLength={minLength}
        pattern="[0-9]*"
        inputMode="numeric"
        {...inputProps}
      />
    </FormGroup>
  )
}

export default DateInput

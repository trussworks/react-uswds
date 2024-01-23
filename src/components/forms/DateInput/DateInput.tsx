import React, { forwardRef } from 'react'
import classnames from 'classnames'

import TextInput, { BaseTextInputProps } from '../TextInput/TextInput'
import Label from '../Label/Label'
import FormGroup from '../FormGroup/FormGroup'

export type DateInputPropsBase = {
  id: string
  name: string
  label: string
  unit: 'month' | 'day' | 'year'
  maxLength: number
  minLength?: number
}

export type DateInputProps = DateInputPropsBase &
  BaseTextInputProps &
  JSX.IntrinsicElements['input']

export const DateInputForwardRef: React.ForwardRefRenderFunction<HTMLInputElement, DateInputProps> = ({
  id,
  name,
  label,
  unit,
  maxLength,
  minLength,
  className,
  ...inputProps
}, ref): React.ReactElement => {
  const formGroupClasses = classnames({
    'usa-form-group--month': unit == 'month',
    'usa-form-group--day': unit == 'day',
    'usa-form-group--year': unit == 'year',
  })

  const inputClasses = classnames(className)

  return (
    <FormGroup ref={ref} className={formGroupClasses}>
      <Label htmlFor={id}>{label}</Label>
      <TextInput
        ref={ref}
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

export const DateInput = forwardRef(DateInputForwardRef)

export default DateInput

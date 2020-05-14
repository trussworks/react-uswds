import React from 'react'
import classnames from 'classnames'

import { TextInput } from '../TextInput/TextInput'
import { Label } from '../Label/Label'
import { FormGroup } from '../FormGroup/FormGroup'

interface DateInputElementProps {
  id: string
  name: string
  label: string
  unit: 'month' | 'day' | 'year'
  maxLength: number
  minLength?: number
}

export const DateInput = (
  props: DateInputElementProps & React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const {
    id,
    name,
    label,
    unit,
    maxLength,
    minLength,
    className,
    ...divProps
  } = props

  const classes = classnames(
    {
      'usa-form-group--month': unit == 'month',
      'usa-form-group--day': unit == 'day',
      'usa-form-group--year': unit == 'year',
    },
    className
  )

  return (
    <FormGroup className={classes} {...divProps}>
      <Label htmlFor={id}>{label}</Label>
      <TextInput
        className="usa-input--inline"
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

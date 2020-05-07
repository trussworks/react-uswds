import React from 'react'
import classnames from 'classnames'

import { TextInput } from '../TextInput/TextInput'
import { Label } from '../Label/Label'
import { Fieldset } from '../Fieldset/Fieldset'

interface DateInputElementProps {
  id: string
  name: string
  label: string
  maxLength: number
  minLength?: number
}

interface DateInputProps {
  id: string
  name: string
  legend: React.ReactNode
  month?: boolean
  day?: boolean
  year?: boolean
  hint?: string
  className?: string
}

const DateInputElement = (
  props: DateInputElementProps & React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const { id, name, label, maxLength, minLength } = props

  return (
    <div className="usa-form-group usa-form-group--month">
      <Label htmlFor={`${id}_month`}>{label}</Label>
      <TextInput
        className="usa-input--inline"
        id={`${id}_month`}
        name={`${name}_month`}
        type="text"
        maxLength={maxLength}
        minLength={minLength}
        pattern="[0-9]*"
        inputMode="numeric"
      />
    </div>
  )
}

export const DateInput = (
  props: DateInputProps & React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const {
    id,
    name,
    legend,
    month = true,
    day = true,
    year = true,
    hint,
    className,
    ...divAttributes
  } = props

  const classes = classnames('usa-memorable-date', className)

  return (
    <Fieldset legend={legend}>
      <span className="usa-hint" id={`${id}_hint`}>
        {hint}
      </span>
      <div className={classes} {...divAttributes}>
        {month && (
          <DateInputElement id={id} name={name} label="Month" maxLength={2} />
        )}
        {day && (
          <DateInputElement id={id} name={name} label="Day" maxLength={2} />
        )}
        {year && (
          <DateInputElement
            id={id}
            name={name}
            label="Year"
            maxLength={4}
            minLength={4}
          />
        )}
      </div>
    </Fieldset>
  )
}

export default DateInput

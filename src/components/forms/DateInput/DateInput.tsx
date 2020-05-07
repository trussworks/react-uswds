import React from 'react'
import classnames from 'classnames'

import { TextInput } from '../TextInput/TextInput'
import { Label } from '../Label/Label'
import { Fieldset } from '../Fieldset/Fieldset'

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

export const DateInput = (
  props: DateInputProps & React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const {
    id,
    name,
    legend,
    month,
    day,
    year,
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
          <div className="usa-form-group usa-form-group--month">
            <Label htmlFor={`${id}_month`}>Month</Label>
            <TextInput
              className="usa-input--inline"
              id={`${id}_month`}
              name={`${name}_month`}
              type="text"
              maxLength={2}
              pattern="[0-9]*"
              inputMode="numeric"
            />
          </div>
        )}
        {day && (
          <div className="usa-form-group usa-form-group--day">
            <Label htmlFor={`${id}_day`}>Day</Label>
            <TextInput
              className="usa-input--inline"
              id={`${id}_day`}
              name={`${name}_day`}
              type="text"
              maxLength={2}
              pattern="[0-9]*"
              inputMode="numeric"
            />
          </div>
        )}
        {year && (
          <div className="usa-form-group usa-form-group--year">
            <Label htmlFor={`${id}_year`}>Year</Label>
            <TextInput
              className="usa-input--inline"
              id={`${id}_year`}
              name={`${name}_year`}
              type="text"
              minLength={4}
              maxLength={4}
              pattern="[0-9]*"
              inputMode="numeric"
            />
          </div>
        )}
      </div>
    </Fieldset>
  )
}

export default DateInput

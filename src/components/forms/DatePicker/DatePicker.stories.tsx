import React from 'react'

import { DatePicker } from './DatePicker'
import { Form } from '../Form/Form'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'

export default {
  title: 'Components/Form controls/Date picker',
  component: DatePicker,
  argTypes: { onSubmit: { action: 'submitted' } },
}

export const completeDatePicker = (argTypes): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <FormGroup>
      <Label id="appointment-date-label" htmlFor="appointment-date">
        Appointment date
      </Label>
      <div className="usa-hint" id="appointment-date-hint">
        mm/dd/yyyy
      </div>
      <DatePicker
        id="appointment-date"
        name="appointment-date"
        aria-describedby="appointment-date-label appointment-date-hint"
      />
    </FormGroup>
  </Form>
)

export const defaultDatePicker = (): React.ReactElement => (
  <DatePicker id="birthdate" name="birthdate" />
)

export const disabled = (): React.ReactElement => (
  <DatePicker id="birthdate" name="birthdate" disabled />
)

export const withDefaultValue = (): React.ReactElement => (
  <DatePicker id="birthdate" name="birthdate" defaultValue="1988-05-16" />
)

export const withDefaultInvalidValue = (): React.ReactElement => (
  <DatePicker
    id="birthdate"
    name="birthdate"
    defaultValue="1988-05-16"
    minDate="2020-01-01"
  />
)

export const withMinMaxInSameMonth = (): React.ReactElement => (
  <DatePicker
    id="birthdate"
    name="birthdate"
    minDate="2021-01-10"
    maxDate="2021-01-20"
  />
)

export const withMinMax = (): React.ReactElement => (
  <DatePicker
    id="birthdate"
    name="birthdate"
    minDate="2020-01-01"
    maxDate="2021-5-31"
  />
)

export const withRangeDate = (): React.ReactElement => (
  <DatePicker
    id="birthdate"
    name="birthdate"
    defaultValue="2021-01-20"
    rangeDate="2021-01-08"
  />
)

export const withExternalInput = (): React.ReactElement => (
  <>
    <DatePicker id="birthdate" name="birthdate" />
    <input type="text" data-testid="test-external-element" />
  </>
)

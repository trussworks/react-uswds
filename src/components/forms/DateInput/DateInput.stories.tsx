import React, { type JSX } from 'react'
import { DateInput } from './DateInput'
import { DateInputGroup } from '../DateInputGroup/DateInputGroup'
import { Fieldset } from '../Fieldset/Fieldset'
import { Label } from '../Label/Label'
import { Select } from '../Select/Select'
import { FormGroup } from '../FormGroup/FormGroup'

export default {
  title: 'Components/Date input',
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 DateInput component

Source: https://designsystem.digital.gov/components/text-input/
`,
      },
    },
  },
}

export const MonthDateInput = (): JSX.Element => (
  <DateInput
    id="testDateInput"
    name="testName"
    label="Month"
    unit="month"
    maxLength={2}
    minLength={2}
  />
)

export const DayDateInput = (): JSX.Element => (
  <DateInput
    id="testDateInput"
    name="testName"
    label="Day"
    unit="day"
    maxLength={2}
    minLength={1}
  />
)

export const YearDateInput = (): JSX.Element => (
  <DateInput
    id="testDateInput"
    name="testName"
    label="Year"
    unit="year"
    maxLength={4}
    minLength={4}
  />
)

export const DateOfBirthExample = (): JSX.Element => (
  <Fieldset legend="Date of birth">
    <span className="usa-hint" id="dateOfBirthHint">
      For example: April 28 1986
    </span>
    <DateInputGroup>
      <FormGroup className="usa-form-group--month usa-form-group--select">
        <Label htmlFor="input-select">Month</Label>
        <Select
          id="testDateInput"
          name="testDateInput"
          aria-describedby="dateOfBirthHint">
          <option>- Select -</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </Select>
      </FormGroup>
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
        aria-describedby="dateOfBirthHint"
      />
      <DateInput
        id="testDateInput"
        name="testName"
        label="Year"
        unit="year"
        maxLength={4}
        minLength={4}
        aria-describedby="dateOfBirthHint"
      />
    </DateInputGroup>
  </Fieldset>
)

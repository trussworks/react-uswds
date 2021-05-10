import React from 'react'
import { DateInput } from './DateInput'
import { DateInputGroup } from '../DateInputGroup/DateInputGroup'
import { Fieldset } from '../Fieldset/Fieldset'

export default {
  title: 'Components/Date input',
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 DateInput component

Source: https://designsystem.digital.gov/components/date-input
`,
      },
    },
  },
}

export const monthDateInput = (): React.ReactElement => (
  <DateInput
    id="testDateInput"
    name="testName"
    label="Month"
    unit="month"
    maxLength={2}
    minLength={2}
  />
)

export const dayDateInput = (): React.ReactElement => (
  <DateInput
    id="testDateInput"
    name="testName"
    label="Day"
    unit="day"
    maxLength={2}
    minLength={1}
  />
)

export const yearDateInput = (): React.ReactElement => (
  <DateInput
    id="testDateInput"
    name="testName"
    label="Year"
    unit="year"
    maxLength={4}
    minLength={4}
  />
)

export const dateOfBirthExample = (): React.ReactElement => (
  <Fieldset legend="Date of birth">
    <span className="usa-hint" id="dateOfBirthHint">
      For example: 4 28 1986
    </span>
    <DateInputGroup>
      <DateInput
        id="testDateInput"
        name="testName"
        label="Month"
        unit="month"
        maxLength={2}
        minLength={2}
      />
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
      />
      <DateInput
        id="testDateInput"
        name="testName"
        label="Year"
        unit="year"
        maxLength={4}
        minLength={4}
      />
    </DateInputGroup>
  </Fieldset>
)

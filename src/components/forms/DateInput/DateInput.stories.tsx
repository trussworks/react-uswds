import React from 'react'
import { DateInput } from './DateInput'

export default {
  title: 'Form/DateInput',
  parameters: {
    info: `
USWDS 2.0 DateInput component

Source: https://designsystem.digital.gov/components/form-controls/#date-input
`,
  },
}

export const defaultDateInput = (): React.ReactElement => (
  <DateInput
    id="testDateInput"
    name="testName"
    legend="Date of Birth"
    hint="For example: 4 08 1999"
  />
)

export const partialDateInput = (): React.ReactElement => (
  <DateInput
    id="testDateInput"
    name="testName"
    day={false}
    legend="Month and Year of Birth"
    hint="For example: 08 1999"
  />
)

import React from 'react'
import { DateInput } from './DateInput'
import { Form } from '../Form/Form'

export default {
  title: 'DateInput',
  parameters: {
    info: `
USWDS 2.0 DateInput component

Source: https://designsystem.digital.gov/components/form-controls/#text-input
`,
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

export const defaultDateInput = (): React.ReactElement => (
  <Form onSubmit={mockSubmit}>
    <DateInput
      id="testDateInput"
      name="testName"
      legend="Date of Birth"
      hint="For example: 4 08 1999"
    />
  </Form>
)

export const partialDateInput = (): React.ReactElement => (
  <Form onSubmit={mockSubmit}>
    <DateInput
      id="testDateInput"
      name="testName"
      day={false}
      legend="Date of Birth"
      hint="For example: 08 1999"
    />
  </Form>
)

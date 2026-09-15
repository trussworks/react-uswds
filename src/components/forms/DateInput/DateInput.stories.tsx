import React from 'react'
import { DateInput } from './DateInput'
import { DateInputGroup } from '../DateInputGroup/DateInputGroup'
import { Fieldset } from '../Fieldset/Fieldset'
import { Label } from '../Label/Label'
import { Select } from '../Select/Select'
import { FormGroup } from '../FormGroup/FormGroup'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DateInput> = {
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

export default meta
type Story = StoryObj<typeof meta>

export const MonthDateInput: Story = {
  render: () => (
    <DateInput
      id="testDateInput"
      name="testName"
      label="Month"
      unit="month"
      maxLength={2}
      minLength={2}
    />
  ),
}

export const DayDateInput: Story = {
  render: () => (
    <DateInput
      id="testDateInput"
      name="testName"
      label="Day"
      unit="day"
      maxLength={2}
      minLength={1}
    />
  ),
}

export const YearDateInput: Story = {
  render: () => (
    <DateInput
      id="testDateInput"
      name="testName"
      label="Year"
      unit="year"
      maxLength={4}
      minLength={4}
    />
  ),
}

export const DateOfBirthExample: Story = {
  render: () => (
    <Fieldset legend="Date of birth">
      <span className="usa-hint" aria-hidden="true" id="date-of-birth-hint">
        Select a month. Enter 1 or 2 digits for the day and 4 digits for the
        year.
      </span>
      <DateInputGroup>
        <FormGroup className="usa-form-group--month usa-form-group--select">
          <Label htmlFor="date-of-birth-month">Month</Label>
          <span className="usa-hint usa-sr-only" id="date-of-birth-month-hint">
            Select a month from the dropdown.
          </span>
          <Select
            id="date-of-birth-month"
            name="date-of-birth-month"
            aria-describedby="date-of-birth-month-hint">
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
          id="date-of-birth-day"
          name="date-of-birth-day"
          label="Day"
          unit="day"
          maxLength={2}
          minLength={2}
          srHint="Enter 1 or 2 digits for the day."
        />
        <DateInput
          id="date-of-birth-year"
          name="date-of-birth-year"
          label="Year"
          unit="year"
          maxLength={4}
          minLength={4}
          srHint="Enter 4 digits for the year."
        />
      </DateInputGroup>
    </Fieldset>
  ),
}

import React from 'react'

import { DateRangePicker } from './DateRangePicker'
import { Form } from '../Form/Form'

export default {
  title: 'Components/Form controls/Date range picker',
  component: DateRangePicker,
  argTypes: {
    onSubmit: { 
      action: 'submitted' 
    },
    startDatePickerDisabled: { 
      control: { type: 'boolean' },
      defaultValue: false
    },
    endDatePickerDisabled: { 
      control: { type: 'boolean' },
      defaultValue: false
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
  ### USWDS 2.0 Date Range Picker component
  Source: https://designsystem.digital.gov/components/form-controls/#date-range-picker
        `
      },
    },
  },
}

export const completeDateRangePicker = (argTypes): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <DateRangePicker 
      startDateLabel="Event start date"
      startDateHint="mm/dd/yyyy"
      startDatePickerProps={{
        id: "event-date-start",
        name: "event-date-start",
        disabled: argTypes.startDatePickerDisabled
      }}
      endDateLabel="Event end date"
      endDateHint="mm/dd/yyyy"
      endDatePickerProps={{
        id: "event-date-end",
        name: "event-date-end",
        disabled: argTypes.endDatePickerDisabled
      }}
      />
  </Form> 
)

export const withRangeDates = (argTypes): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <DateRangePicker 
      startDateLabel="Event start date"
      startDateHint="mm/dd/yyyy"
      startDatePickerProps={{
        id: "event-date-start",
        name: "event-date-start",
        disabled: argTypes.startDatePickerDisabled
      }}
      endDateLabel="Event end date"
      endDateHint="mm/dd/yyyy"
      endDatePickerProps={{
        id: "event-date-end",
        name: "event-date-end",
        disabled: argTypes.endDatePickerDisabled
      }}
      />
  </Form> 
)
import React, { type JSX } from 'react'

import { DateRangePicker } from './DateRangePicker'
import { Form } from '../Form/Form'

export default {
  title: 'Components/Date range picker',
  component: DateRangePicker,
  argTypes: {
    onSubmit: {
      action: 'submitted',
    },
    startDatePickerDisabled: {
      control: { type: 'boolean' },
    },
    endDatePickerDisabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
  ### USWDS 3.0 Date Range Picker component
  Source: https://designsystem.digital.gov/components/date-range-picker
        `,
      },
    },
  },
  args: {
    startDatePickerDisabled: false,
    endDatePickerDisabled: false,
  },
}

type StorybookArguments = {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  startDatePickerDisabled: boolean
  endDatePickerDisabled: boolean
}

export const CompleteDateRangePicker = {
  render: (argTypes: StorybookArguments): JSX.Element => (
    <Form onSubmit={argTypes.onSubmit}>
      <DateRangePicker
        startDateLabel="Event start date"
        startDateHint="mm/dd/yyyy"
        startDatePickerProps={{
          id: 'event-date-start',
          name: 'event-date-start',
          disabled: argTypes.startDatePickerDisabled,
        }}
        endDateLabel="Event end date"
        endDateHint="mm/dd/yyyy"
        endDatePickerProps={{
          id: 'event-date-end',
          name: 'event-date-end',
          disabled: argTypes.endDatePickerDisabled,
        }}
      />
    </Form>
  ),
}

export const WithDefaultValues = {
  render: (argTypes: StorybookArguments): JSX.Element => (
    <Form onSubmit={argTypes.onSubmit}>
      <DateRangePicker
        startDateLabel="Event start date"
        startDateHint="mm/dd/yyyy"
        startDatePickerProps={{
          id: 'event-date-start',
          name: 'event-date-start',
          defaultValue: '2021-01-20',
          disabled: argTypes.startDatePickerDisabled,
        }}
        endDateLabel="Event end date"
        endDateHint="mm/dd/yyyy"
        endDatePickerProps={{
          id: 'event-date-end',
          name: 'event-date-end',
          defaultValue: '2021-01-25',
          disabled: argTypes.endDatePickerDisabled,
        }}
      />
    </Form>
  ),
}

export const WithAllowableRanges = {
  render: (argTypes: StorybookArguments): JSX.Element => (
    <Form onSubmit={argTypes.onSubmit}>
      <DateRangePicker
        startDateLabel="Event start date"
        startDateHint="mm/dd/yyyy"
        startDatePickerProps={{
          id: 'event-date-start',
          name: 'event-date-start',
          minDate: '2021-01-01',
          maxDate: '2021-01-20',
          disabled: argTypes.startDatePickerDisabled,
        }}
        endDateLabel="Event end date"
        endDateHint="mm/dd/yyyy"
        endDatePickerProps={{
          id: 'event-date-end',
          name: 'event-date-end',
          minDate: '2021-01-20',
          maxDate: '2021-01-25',
          disabled: argTypes.endDatePickerDisabled,
        }}
      />
    </Form>
  ),
}

import React from 'react'

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
      defaultValue: false,
    },
    endDatePickerDisabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
  ### USWDS 2.0 Date Range Picker component
  Source: https://designsystem.digital.gov/components/date-range-picker
        `,
      },
    },
  },
}

type StorybookArguments = {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  startDatePickerDisabled: boolean
  endDatePickerDisabled: boolean
}

export const completeDateRangePicker = (
  argTypes: StorybookArguments
): React.ReactElement => (
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
)

export const withDefaultValues = (
  argTypes: StorybookArguments
): React.ReactElement => (
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
)

export const withAllowableRanges = (
  argTypes: StorybookArguments
): React.ReactElement => (
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
)

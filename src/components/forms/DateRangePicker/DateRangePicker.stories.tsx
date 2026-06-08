import React from 'react'

import { DateRangePicker } from './DateRangePicker'
import { Form } from '../Form/Form'
import { Meta, StoryObj } from '@storybook/react-vite'

const mockSubmit = (): void => {
  /* mock submit fn */
}

const meta = {
  title: 'Components/Date range picker',
  component: DateRangePicker,
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
    startDateLabel: 'Event start date',
    startDateHint: 'mm/dd/yyyy',
    endDateLabel: 'Event end date',
    endDateHint: 'mm/dd/yyyy',
    startDatePickerProps: {
      id: 'event-date-start',
      name: 'event-date-start',
      disabled: false,
    },
    endDatePickerProps: {
      id: 'event-date-end',
      name: 'event-date-end',
      disabled: false,
    },
  },
  render: (args) => (
    <Form onSubmit={mockSubmit}>
      <DateRangePicker {...args} />
    </Form>
  ),
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof meta>

export const CompleteDateRangePicker: Story = {}

export const WithDefaultValues: Story = {
  args: {
    startDatePickerProps: {
      defaultValue: '2021-01-20',
      ...meta.args.startDatePickerProps,
    },
    endDatePickerProps: {
      defaultValue: '2021-01-25',
      ...meta.args.endDatePickerProps,
    },
  },
}

export const WithAllowableRanges: Story = {
  args: {
    startDatePickerProps: {
      minDate: '2021-01-01',
      maxDate: '2021-01-20',
      ...meta.args.startDatePickerProps,
    },
    endDatePickerProps: {
      minDate: '2021-01-20',
      maxDate: '2021-01-25',
      ...meta.args.endDatePickerProps,
    },
  },
}

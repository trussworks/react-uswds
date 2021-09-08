import React from 'react'

import { Form } from '../Form/Form'
import { TimePicker } from './TimePicker'

export default {
  title: 'Components/Form controls/Time picker',
  component: TimePicker,
  argTypes: {
    onsubmit: { action: 'submitted' },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 TimePicker component

https://designsystem.digital.gov/components/time-picker/
`,
      },
    },
  },
}

type StorybookArguments = {
  onSubmit: () => void
  disabled: boolean
}

const noop = (): void => {
  return
}

export const completeTimePicker = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment Time"
      hint="hh:mm"
      onChange={noop}
      disabled={argTypes.disabled}
    />
  </Form>
)

export const defaultTimePicker = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      onChange={noop}
      disabled={argTypes.disabled}
    />
  </Form>
)

export const withMinAndMaxTimes = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment Time"
      hint="hh:mm (9:00am - 5:00pm)"
      minTime="9:00"
      maxTime="17:00"
      onChange={noop}
      disabled={argTypes.disabled}
    />
  </Form>
)

export const withDefaultValue = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment Time"
      hint="hh:mm"
      defaultValue="12:00"
      onChange={noop}
      disabled={argTypes.disabled}
    />
  </Form>
)

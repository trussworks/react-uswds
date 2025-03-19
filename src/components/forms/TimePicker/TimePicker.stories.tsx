import React, { type JSX } from 'react'

import { Form } from '../Form/Form'
import { TimePicker } from './TimePicker'

export default {
  title: 'Components/Time picker',
  component: TimePicker,
  argTypes: {
    onsubmit: { action: 'submitted' },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 TimePicker component

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

export const CompleteTimePicker = (
  argTypes: StorybookArguments
): JSX.Element => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment time"
      hint="hh:mm"
      onChange={noop}
      disabled={argTypes.disabled}
    />
  </Form>
)

export const DefaultTimePicker = (
  argTypes: StorybookArguments
): JSX.Element => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment time"
      onChange={noop}
      disabled={argTypes.disabled}
    />
  </Form>
)

export const WithMinAndMaxTimes = (
  argTypes: StorybookArguments
): JSX.Element => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment time"
      hint="hh:mm (9:00am - 5:00pm)"
      minTime="9:00"
      maxTime="17:00"
      onChange={noop}
      disabled={argTypes.disabled}
    />
  </Form>
)

export const WithDefaultValue = (argTypes: StorybookArguments): JSX.Element => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment time"
      hint="hh:mm"
      defaultValue="12:00"
      onChange={noop}
      disabled={argTypes.disabled}
    />
  </Form>
)

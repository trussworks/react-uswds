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

const noop = (): void => {
  return
}

export const completeTimePicker = (argTypes): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment Time"
      hint="hh:mm"
      onChange={noop}
    />
  </Form>
)

export const defaultTimePicker = (argTypes): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker id="appointment-time" name="appointment-time" onChange={noop} />
  </Form>
)

export const withMinAndMaxTimes = (argTypes): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment Time"
      hint="hh:mm (9:00am - 5:00pm)"
      minTime="9:00"
      maxTime="17:00"
      onChange={noop}
    />
  </Form>
)

export const withDefaultValue = (argTypes): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker
      id="appointment-time"
      name="appointment-time"
      label="Appointment Time"
      hint="hh:mm"
      defaultValue="12:00"
      onChange={noop}
    />
  </Form>
)

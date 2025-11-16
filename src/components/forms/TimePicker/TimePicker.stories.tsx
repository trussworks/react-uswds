import React, { type JSX } from 'react'

import { TimePicker } from './TimePicker'

export default {
  title: 'Components/Time picker',
  component: TimePicker,
  argTypes: {
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

const recommendedHintText =
  'Select a time from the dropdown. Type into the input to filter options.'

export const CompleteTimePicker = (
  argTypes: StorybookArguments
): JSX.Element => (
  <TimePicker
    id="appointment-time"
    name="appointment-time"
    label="Appointment time"
    hint={recommendedHintText}
    onChange={noop}
    disabled={argTypes.disabled}
  />
)

export const DefaultTimePicker = (
  argTypes: StorybookArguments
): JSX.Element => (
  <TimePicker
    id="appointment-time"
    name="appointment-time"
    label="Appointment time"
    onChange={noop}
    disabled={argTypes.disabled}
  />
)

export const WithMinAndMaxTimes = (
  argTypes: StorybookArguments
): JSX.Element => (
  <TimePicker
    id="appointment-time"
    name="appointment-time"
    label="Appointment time"
    hint={recommendedHintText}
    minTime="9:00"
    maxTime="17:00"
    onChange={noop}
    disabled={argTypes.disabled}
  />
)

export const WithDefaultValue = (argTypes: StorybookArguments): JSX.Element => (
  <TimePicker
    id="appointment-time"
    name="appointment-time"
    label="Appointment time"
    hint={recommendedHintText}
    defaultValue="12:00"
    onChange={noop}
    disabled={argTypes.disabled}
  />
)

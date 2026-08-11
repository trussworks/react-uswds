import type { Meta, StoryObj } from '@storybook/react-vite'

import { TimePicker } from './TimePicker'

const noop = (): void => {
  return
}

const recommendedHintText =
  'Select a time from the dropdown. Type into the input to filter options.'

const meta = {
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

With the default \`minTime\` and \`step\`, \`maxTime="00:00"\` limits the options to midnight.
`,
      },
    },
  },
  args: {
    id: 'appointment-time',
    name: 'appointment-time',
    label: 'Appointment time',
    onChange: noop,
  },
} satisfies Meta<typeof TimePicker>

export default meta
type Story = StoryObj<typeof meta>

export const CompleteTimePicker: Story = {
  args: { hint: recommendedHintText },
}

export const DefaultTimePicker: Story = {}

export const WithMinAndMaxTimes: Story = {
  args: { hint: recommendedHintText, minTime: '9:00', maxTime: '17:00' },
}

export const With24HourFormat: Story = {
  args: { hint: recommendedHintText, format: '24h' },
}

export const WithDefaultValue: Story = {
  args: { hint: recommendedHintText, defaultValue: '12:00' },
}

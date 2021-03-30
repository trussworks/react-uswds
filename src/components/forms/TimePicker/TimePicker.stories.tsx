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

export const defaultTimePicker = (argTypes): React.ReactElement => (
  <Form onSubmit={argTypes.onSubmit}>
    <TimePicker id="" label="" onChange={noop} />
  </Form>
)

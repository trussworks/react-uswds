import React from 'react'
import { Radio } from './Radio'

export default {
  title: 'Components/Form controls/Radio buttons',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Radio component

Source: https://designsystem.digital.gov/components/form-controls/#radio-buttons
`,
      },
    },
  },
}

export const defaultRadio = (): React.ReactElement => (
  <Radio id="input-radio" name="input-radio" label="My Radio Button" />
)

export const selected = (): React.ReactElement => (
  <Radio
    id="input-radio"
    name="input-radio"
    label="My Radio Button"
    defaultChecked
  />
)

export const disabled = (): React.ReactElement => (
  <Radio id="input-radio" name="input-radio" label="My Radio Button" disabled />
)

export const tile = (): React.ReactElement => (
  <Radio id="input-radio" name="input-radio" label="My Radio Button" tile />
)

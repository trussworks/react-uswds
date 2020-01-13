import React from 'react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Checkbox',
  parameters: {
    info: `
USWDS 2.0 Checkbox component

Source: https://designsystem.digital.gov/components/form-controls/#checkbox
`,
  },
}

export const defaultCheckbox = (): React.ReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" />
)

export const checked = (): React.ReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" defaultChecked />
)

export const disabled = (): React.ReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" disabled />
)

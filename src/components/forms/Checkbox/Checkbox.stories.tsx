import React from 'react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Form controls/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Checkbox component

Source: https://designsystem.digital.gov/components/form-controls/#checkbox
`,
      },
    },
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

export const withRichLabel = (): React.ReactElement => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label={<strong>My Checkbox</strong>}
  />
)

export const WithLabelDescription = (): React.ReactElement => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label="My Checkbox"
    labelDescription="Optional label description"
  />
)

export const tile = (): React.ReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" tile />
)

export const tileWithLabelDescription = (): React.ReactElement => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label="My Checkbox"
    labelDescription="Optional label description"
    tile
  />
)

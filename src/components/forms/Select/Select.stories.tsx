import React from 'react'

import { Select } from './Select'
import { Label } from '../Label/Label'

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Select component

Source: https://designsystem.digital.gov/components/select/
`,
      },
    },
  },
}

export const defaultSelect = (): React.ReactElement => (
  <Select id="input-select" name="input-select">
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </Select>
)

export const withDefaultValue = (): React.ReactElement => (
  <Select id="input-select" name="input-select" defaultValue="value2">
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </Select>
)

export const withLabel = (): React.ReactElement => (
  <>
    <Label htmlFor="options">Select label</Label>
    <Select id="input-select" name="input-select">
      <option>- Select - </option>
      <option value="value1">Option A</option>
      <option value="value2">Option B</option>
      <option value="value3">Option C</option>
    </Select>
  </>
)

export const disabled = (): React.ReactElement => (
  <Select id="input-select" name="input-select" disabled>
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </Select>
)

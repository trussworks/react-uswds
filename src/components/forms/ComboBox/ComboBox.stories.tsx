import React from 'react'

import { ComboBox } from './ComboBox'
import { Label } from '../Label/Label'
import { Form } from '../Form/Form'

export default {
  title: 'Forms/ComboBox',
  component: ComboBox,
  parameters: {
    info: `
USWDS 2.0 ComboBox component

Source: https://designsystem.digital.gov/components/form-controls/#ComboBox
`,
  },
}

const noop = (): void => {
  return
}

export const defaultComboBox = (): React.ReactElement => (
  <Form onSubmit={noop}>
    <ComboBox id="input-ComboBox" name="input-ComboBox"></ComboBox>
  </Form>
)

export const withDefaultValue = (): React.ReactElement => (
  <ComboBox id="input-ComboBox" name="input-ComboBox" defaultValue="value2">
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </ComboBox>
)

export const withLabel = (): React.ReactElement => (
  <>
    <Label htmlFor="options">ComboBox label</Label>
    <ComboBox id="input-ComboBox" name="input-ComboBox">
      <option>- Select - </option>
      <option value="value1">Option A</option>
      <option value="value2">Option B</option>
      <option value="value3">Option C</option>
    </ComboBox>
  </>
)

export const disabled = (): React.ReactElement => (
  <ComboBox id="input-ComboBox" name="input-ComboBox" disabled>
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </ComboBox>
)

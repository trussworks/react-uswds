import React from 'react'

import { ComboBox } from './ComboBox'
import { Form } from '../Form/Form'
import { Label } from '../Label/Label'

import { fruits } from './fruits'

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

export const defaultComboBoxWithPropOptions = (): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([key, value]) => ({
    value: key,
    label: value,
  }))

  return (
    <Form onSubmit={noop}>
      <ComboBox
        id="input-ComboBox"
        name="input-ComboBox"
        options={fruitList}
        onChange={noop}
      />
    </Form>
  )
}

export const withDefaultValue = (): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  return (
    <Form onSubmit={noop}>
      <ComboBox
        id="input-ComboBox"
        name="input-ComboBox"
        options={fruitList}
        onChange={noop}
        defaultValue="avocado"
      />
    </Form>
  )
}

export const withLabel = (): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select A Fruit</Label>
      <ComboBox id="fruit" name="fruit" options={fruitList} onChange={noop} />
    </Form>
  )
}

export const disabled = (): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a Fruit</Label>
      <ComboBox
        id="fruit"
        name="fruit"
        options={fruitList}
        onChange={noop}
        disabled
      />
    </Form>
  )
}

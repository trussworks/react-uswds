import React, { useRef } from 'react'

import { ComboBox, ComboBoxRef } from './ComboBox'
import { Form } from '../Form/Form'
import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'
import { Button } from '../../Button/Button'
import { fruits } from './fruits'

export default {
  title: 'Components/Combo box',
  component: ComboBox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 ComboBox component

Source: https://designsystem.digital.gov/components/combo-box
`,
      },
    },
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
        defaultValue="mango"
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
      <Label htmlFor="fruit">Select a fruit</Label>
      <ComboBox
        id="fruit"
        name="fruit"
        options={fruitList}
        onChange={noop}
        ulProps={{ 'aria-labelledby': 'fruit-label' }}
      />
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

export const withOtherFields = (): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a Fruit</Label>
      <ComboBox id="fruit" name="fruit" options={fruitList} onChange={noop} />
      <Label htmlFor="fruitDescription">Description</Label>
      <TextInput id="fruitDescription" name="fruitDescription" type="text" />
    </Form>
  )
}

export const exposedRefMethods = (): React.ReactElement => {
  const ref = useRef<ComboBoxRef>()

  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  const handleClearSelection = (): void => ref.current.clearSelection()
  const handleFocus = (): void => ref.current.focus()

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a Fruit</Label>
      <ComboBox
        id="fruit"
        name="fruit"
        options={fruitList}
        onChange={noop}
        ref={ref}
      />
      <Button type="reset" onClick={handleClearSelection}>
        Clear Selected Value
      </Button>

      <Button type="button" onClick={handleFocus}>
        Focus on input
      </Button>
    </Form>
  )
}

export const customInputChangeHandler = (): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  const options = [...fruitList]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value && fruitList.findIndex((f) => f.value === value) < 0) {
      if (options.length === fruitList.length) {
        // Add new option to end of list
        options.push({ value, label: value })
      } else {
        // Rewrite the new option
        options[options.length - 1] = { value, label: `Add new: ${value}` }
      }
    }
  }

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a Fruit</Label>
      <ComboBox
        id="fruit"
        name="fruit"
        options={options}
        onChange={noop}
        inputProps={{ onChange: handleInputChange }}
      />
    </Form>
  )
}

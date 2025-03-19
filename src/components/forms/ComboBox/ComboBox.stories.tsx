import React, { type JSX, useRef, useState } from 'react'

import { ComboBox, ComboBoxRef } from './ComboBox'
import { Form } from '../Form/Form'
import { Label } from '../Label/Label'
import { Button } from '../../Button/Button'
import { fruits, veggies } from './foods'
import { Radio } from '../Radio/Radio'

export default {
  title: 'Components/Combo box',
  component: ComboBox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 ComboBox component

Source: https://designsystem.digital.gov/components/combo-box
`,
      },
    },
  },
}

const noop = (): void => {
  return
}

export const DefaultComboBoxWithPropOptions = (): JSX.Element => {
  const fruitList = Object.entries(fruits).map(([key, value]) => ({
    value: key,
    label: value,
  }))

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="input-ComboBox">Select a fruit</Label>
      <ComboBox
        id="input-ComboBox"
        name="input-ComboBox"
        options={fruitList}
        onChange={noop}
      />
    </Form>
  )
}

export const WithDefaultValue = (): JSX.Element => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="input-ComboBox">Select a fruit</Label>
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

export const WithLabel = (): JSX.Element => {
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

export const Disabled = (): JSX.Element => {
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
        disabled
      />
    </Form>
  )
}

export const WithOtherFields = (): JSX.Element => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  const veggieList = Object.entries(veggies).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  const [options, setOptions] = useState(fruitList)

  const ref = useRef<ComboBoxRef>(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ref.current?.clearSelection()
    const selection = e.target.id
    setOptions(selection === 'fruit' ? fruitList : veggieList)
  }

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="food">Select a group</Label>
      <Radio
        name="food"
        id="fruit"
        label="Fruits"
        onChange={handleChange}
        defaultChecked></Radio>
      <Radio
        name="food"
        id="veggie"
        label="Vegetables"
        onChange={handleChange}></Radio>
      <Label htmlFor="food">Select a food</Label>
      <ComboBox
        id="fruit"
        name="fruit"
        options={options}
        onChange={noop}
        ref={ref}
      />
    </Form>
  )
}

export const ExposedRefMethods = (): JSX.Element => {
  const ref = useRef<ComboBoxRef>(null)

  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  const handleClearSelection = (): void => ref.current?.clearSelection()
  const handleFocus = (): void => ref.current?.focus()

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a fruit</Label>
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

export const CustomInputChangeHandler = (): JSX.Element => {
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
      <Label htmlFor="fruit">Select a fruit</Label>
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

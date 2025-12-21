import React, { useRef, useState } from 'react'
import { ComboBox, ComboBoxRef } from './ComboBox'
import { Form } from '../Form/Form'
import { Label } from '../Label/Label'
import { Button } from '../../Button/Button'
import { fruits, veggies } from './foods'
import { Radio } from '../Radio/Radio'
import { Meta, StoryFn, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Combo box',
  component: ComboBox,
  argTypes: {
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    options: { table: { disable: true } },
    onChange: { table: { disable: true } },
    ulProps: { table: { disable: true } },

    defaultValue: { control: 'text' },
    disableFiltering: { control: 'boolean' },
  },
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
} satisfies Meta<typeof ComboBox>

export default meta
type Story = StoryObj<typeof ComboBox>

const mockSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
}

const Template: StoryFn<typeof ComboBox> = (args) => (
  <Form onSubmit={mockSubmit}>
    <Label htmlFor={args.id}>Select a fruit</Label>
    <ComboBox {...args} />
  </Form>
)

const noop = () => undefined

const fruitList = Object.entries(fruits).map(([value, key]) => ({
  value: value,
  label: key,
}))

const veggieList = Object.entries(veggies).map(([value, key]) => ({
  value: value,
  label: key,
}))

export const DefaultComboBoxWithPropOptions: Story = {
  render: Template,
  args: {
    id: 'default-combobox',
    name: 'default-combobox',
    options: fruitList,
    onChange: noop,
  },
}

export const WithDefaultValue: Story = {
  render: Template,
  args: {
    id: 'default-value-combobox',
    name: 'default-value-combobox',
    options: fruitList,
    onChange: noop,
    defaultValue: 'mango',
  },
}

export const WithLabel: Story = {
  render: Template,
  args: {
    id: 'label-combobox',
    name: 'label-combobox',
    options: fruitList,
    onChange: noop,
    ulProps: { 'aria-labelledby': 'fruit-label' },
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    id: 'disabled-combobox',
    name: 'disabled-combobox',
    options: fruitList,
    onChange: noop,
    disabled: true,
  },
}

export const WithOtherFields: Story = {
  render: (args) => {
    const [options, setOptions] = useState(fruitList)

    const ref = useRef<ComboBoxRef>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      ref.current?.clearSelection()
      const selection = e.target.id
      setOptions(selection === 'fruit' ? fruitList : veggieList)
    }

    return (
      <Form onSubmit={mockSubmit}>
        <span className="usa-label">Select a group</span>
        <Radio
          name="food"
          id="fruit"
          label="Fruits"
          onChange={handleChange}
          defaultChecked
        />
        <Radio
          name="food"
          id="veggie"
          label="Vegetables"
          onChange={handleChange}
        />
        <Label htmlFor={args.id}>Select a food</Label>
        <ComboBox {...args} options={options} ref={ref} />
      </Form>
    )
  },
  args: {
    id: 'other-fields-combobox',
    name: 'other-fields-combobox',
    onChange: noop,
  },
}

export const ExposedRefMethods: Story = {
  render: (args) => {
    const ref = useRef<ComboBoxRef>(null)

    const fruitList = Object.entries(fruits).map(([value, key]) => ({
      value: value,
      label: key,
    }))

    const handleClearSelection = (): void => ref.current?.clearSelection()
    const handleFocus = (): void => ref.current?.focus()

    return (
      <Form onSubmit={mockSubmit}>
        <Label htmlFor={args.id}>Select a fruit</Label>
        <ComboBox {...args} options={fruitList} ref={ref} />
        <Button type="reset" onClick={handleClearSelection}>
          Clear Selected Value
        </Button>
        <Button type="button" onClick={handleFocus}>
          Focus on input
        </Button>
      </Form>
    )
  },
  args: {
    id: 'exposed-ref-combobox',
    name: 'exposed-ref-combobox',
    onChange: noop,
  },
}

export const CustomInputChangeHandler: Story = {
  render: (args) => {
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
      <Form onSubmit={mockSubmit}>
        <Label htmlFor={args.id}>Select a fruit</Label>
        <ComboBox
          {...args}
          options={options}
          inputProps={{ onChange: handleInputChange }}
        />
      </Form>
    )
  },
  args: {
    id: 'input-handler-combobox',
    name: 'input-handler-combobox',
  },
}

export const WithCustomInputClassNames: Story = {
  render: (args) => {
    const fruitList = Object.entries(fruits).map(([value, key]) => ({
      value: value,
      label: key,
    }))

    return (
      <Form onSubmit={mockSubmit}>
        <Label htmlFor={args.id} requiredMarker aria-required error>
          Select a fruit
        </Label>
        <ComboBox
          {...args}
          options={fruitList}
          inputProps={{ className: 'usa-input--error' }}
        />
      </Form>
    )
  },
  args: {
    id: 'custom-class-combobox',
    name: 'custom-class-combobox',
    onChange: noop,
  },
}

import React from 'react'

import { Select } from './Select'
import { Label } from '../Label/Label'
import { ComponentMeta, ComponentStory } from '@storybook/react'

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
  argTypes: {
    validationStatus: {
      options: ['error', 'success', 'undefined'],
      control: 'radio',
    },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Select>

const options = (
  <>
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
    <option value="valueBIG">Option of extra length to demonstrate how content like this will look different</option>
  </>
)

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>{options}</Select>
)

export const Default = Template.bind({})
Default.args = { id: 'input-select', name: 'input-select' }

export const WithDefaultValue = Template.bind({})
WithDefaultValue.args = {
  id: 'input-select',
  name: 'input-select',
  defaultValue: 'value2',
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'input-select',
  name: 'input-select',
  disabled: true,
}

export const WithLabel = () => (
  <>
    <Label htmlFor="input-select">Select label</Label>
    <Select id="input-select" name="input-select">
      {options}
    </Select>
  </>
)

export const Multiselect = () => (
  <Select id='input-multiselect' name='input-multiselect' multiple>
    {options}
  </Select>
)

import React from 'react'

import { Dropdown } from './Dropdown'
import { Label } from '../Label/Label'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Dropdown',
  component: 'Dropdown',
  parameters: {
    docs: {
      description: {
        component: `
### Deprecated USWDS 2.x Dropdown component

⚠️ Dropdown is deprecated and will be removed in the future. Please use the Select component instead.

Source: https://designsystem.digital.gov/components/dropdown/
`,
      },
    },
  },
  argTypes: {
    validationStatus: {
      options: ['error', 'success'],
      control: 'radio',
    },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Dropdown>

const options = (
  <>
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </>
)

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>{options}</Dropdown>
)

export const Default = Template.bind({})
Default.args = { id: 'input-dropdown', name: 'input-dropdown' }

export const WithDefaultValue = Template.bind({})
WithDefaultValue.args = {
  id: 'input-dropdown',
  name: 'input-dropdown',
  defaultValue: 'value2',
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'input-dropdown',
  name: 'input-dropdown',
  disabled: true,
}

export const WithLabel = () => (
  <>
    <Label htmlFor="input-dropdown">Dropdown label</Label>
    <Dropdown id="input-dropdown" name="input-dropdown">
      {options}
    </Dropdown>
  </>
)

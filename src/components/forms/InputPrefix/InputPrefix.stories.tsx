import React from 'react'
import { InputPrefix, InputPrefixProps } from './InputPrefix'
import { Icon } from '../../Icon/Icons'
import { TextInput } from '../TextInput/TextInput'
import { InputGroup } from '../InputGroup/InputGroup'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'
import { Meta, type StoryObj } from '@storybook/react-vite'

const InputPrefixStoryTemplate = (args: InputPrefixProps) => (
  <FormGroup>
    <Label htmlFor="cvc">Input label</Label>
    <InputGroup>
      <InputPrefix className={args.className}>{args.children}</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" />
    </InputGroup>
  </FormGroup>
)

const meta = {
  title: 'Components/Input prefix or suffix/InputPrefix',
  component: InputPrefix,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 InputPrefix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`,
      },
    },
  },
  render: InputPrefixStoryTemplate,
} satisfies Meta<typeof InputPrefixStoryTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const AsText: Story = {
  args: { children: 'cvc' },
}

export const AsIcon: Story = {
  args: { children: <Icon.CreditCard /> },
}

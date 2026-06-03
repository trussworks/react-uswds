import React from 'react'
import { InputSuffix, InputSuffixProps } from './InputSuffix'
import { InputGroup } from '../InputGroup/InputGroup'
import { FormGroup } from '../FormGroup/FormGroup'
import { TextInput } from '../TextInput/TextInput'
import { Icon } from '../../Icon/Icons'
import { Label } from '../Label/Label'
import { Meta, type StoryObj } from '@storybook/react-vite'

const InputSuffixStoryTemplate = (args: InputSuffixProps) => (
  <FormGroup>
    <Label htmlFor="search">Input label</Label>
    <InputGroup>
      <TextInput id="search" name="search" type="search" />
      <InputSuffix className={args.className}>{args.children}</InputSuffix>
    </InputGroup>
  </FormGroup>
)

const meta = {
  title: 'Components/Input prefix or suffix/InputSuffix',
  component: InputSuffix,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 InputSuffix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`,
      },
    },
  },
  render: InputSuffixStoryTemplate,
} satisfies Meta<typeof InputSuffixStoryTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const AsText: Story = {
  args: { children: 'lbs.' },
}

export const AsIcon: Story = {
  args: { children: <Icon.Search /> },
}

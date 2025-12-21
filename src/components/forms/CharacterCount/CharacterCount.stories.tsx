import React from 'react'
import { CharacterCount } from './CharacterCount'
import { Form } from '../Form/Form'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/CharacterCount',
  component: CharacterCount,
  argTypes: {
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    getCharacterCount: { table: { disable: true } },
    getMessage: { table: { disable: true } },

    defaultValue: { control: 'text' },
    value: { control: 'text' },
    isTextArea: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Character count component

Source: https://designsystem.digital.gov/components/character-count
`,
      },
    },
  },
} satisfies Meta<typeof CharacterCount>

export default meta
type Story = StoryObj<typeof CharacterCount>

const mockSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
}

type TemplateArgs = React.ComponentProps<typeof CharacterCount> & {
  label: string
  hint?: string
}
const Template = (templateArgs: TemplateArgs) => {
  const { hint, label, ...args } = templateArgs
  return (
    <Form onSubmit={mockSubmit}>
      <FormGroup>
        <Label htmlFor={args.id}>{label}</Label>
        {hint && (
          <span id={`${args.id}-hint`} className="usa-hint">
            {hint}
          </span>
        )}
        <CharacterCount
          aria-describedby={`${args.id}-info ${args.id}-hint`}
          {...args}
        />
      </FormGroup>
    </Form>
  )
}

export const TextInput: Story = {
  render: (args) =>
    Template({
      ...args,
      label: 'Text input',
      hint: 'This is an input with a character counter.',
    }),
  args: {
    id: 'with-hint-input',
    name: 'with-hint-input',
    maxLength: 25,
  },
}

export const Textarea: Story = {
  render: (args) =>
    Template({
      ...args,
      label: 'Textarea',
      hint: 'This is a textarea with a character counter.',
    }),
  args: {
    id: 'with-hint-textarea',
    name: 'with-hint-textarea',
    maxLength: 50,
    isTextArea: true,
    rows: 2,
  },
}

const customEmojiCharacterCount = (text: string): number => {
  const starCount = (text.match(/⭐️/g) || []).length
  return Array.from(text).length - starCount * 2
}

const customEmojiMessage = (count: number, maxCount: number): string => {
  const remainingCount = maxCount - count
  return remainingCount >= 0 ? `${remainingCount} of ${maxCount} remain` : ''
}

const twitterStyleMessage = (count: number, maxCount: number): string => {
  return maxCount - count < 5 ? `${maxCount - count}` : ''
}

export const TextInputWithCustomCount: Story = {
  render: (args) =>
    Template({
      ...args,
      label: 'Custom - stars are free',
    }),
  args: {
    id: 'character-count-input',
    name: 'character-count-input',
    defaultValue: '⭐️⭐️⭐️',
    maxLength: 10,
    getCharacterCount: customEmojiCharacterCount,
    getMessage: customEmojiMessage,
  },
  parameters: {
    happo: { delay: 100 },
  },
}

export const TextareaWithCustomCount: Story = {
  render: (args) =>
    Template({
      ...args,
      label: 'Custom - Twitter style',
    }),
  args: {
    id: 'character-count-textarea',
    name: 'character-count-textarea',
    defaultValue:
      'In most cases, the text content of a Tweet can contain up to 280 characters or Unicode glyphs. The exact definition of which characters have weights greater than one character is found in the configuration file for the twitter-text Tweet parsing library. This is just an example using regex 😇.',
    isTextArea: true,
    maxLength: 280,
    getMessage: twitterStyleMessage,
  },
  parameters: {
    happo: { delay: 100 },
  },
}

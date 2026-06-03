import React, { type JSX } from 'react'
import { CharacterCount } from './CharacterCount'
import { Form } from '../Form/Form'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'
import { Meta, type StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof CharacterCount> = {
  title: 'Components/CharacterCount',
  component: CharacterCount,
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
}

export default meta
type Story = StoryObj<typeof meta>

const mockSubmit = (): void => {
  /* mock submit fn */
}

export const TextInput: Story = {
  args: { maxLength: 25 },
  render: (args) => (
    <Form onSubmit={mockSubmit}>
      <FormGroup>
        <Label htmlFor="with-hint-input">Text input</Label>
        <span id="with-hint-input-hint" className="usa-hint">
          This is an input with a character counter.
        </span>
        <CharacterCount
          id="with-hint-input"
          name="with-hint-input"
          aria-describedby="with-hint-input-info with-hint-input-hint"
          maxLength={args.maxLength}
        />
      </FormGroup>
    </Form>
  ),
}

export const Textarea: Story = {
  args: { maxLength: 25, rows: 2 },
  render: (args) => (
    <Form onSubmit={mockSubmit}>
      <FormGroup>
        <Label htmlFor="with-hint-textarea">Textarea</Label>
        <span id="with-hint-textarea-hint" className="usa-hint">
          This is a textarea with a character counter.
        </span>
        <CharacterCount
          id="with-hint-textarea"
          name="with-hint-textarea"
          maxLength={args.maxLength}
          isTextArea
          rows={args.rows}
          aria-describedby="with-hint-textarea-info with-hint-textarea-hint"
        />
      </FormGroup>
    </Form>
  ),
}

const withCustomCharacterCountRenderer = (): JSX.Element => {
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

  return (
    <Form onSubmit={mockSubmit}>
      <FormGroup>
        <Label htmlFor="character-count-input">Custom - stars are free</Label>
        <CharacterCount
          id="character-count-input"
          name="characterCountInput"
          defaultValue="⭐️⭐️⭐️"
          getCharacterCount={customEmojiCharacterCount}
          getMessage={customEmojiMessage}
          maxLength={10}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="character-count-textarea">Custom - Twitter style</Label>
        <CharacterCount
          id="character-count-textarea"
          name="characterCountTextArea"
          isTextArea
          defaultValue="In most cases, the text content of a Tweet can contain up to 280 characters or Unicode glyphs. The exact definition of which characters have weights greater than one character is found in the configuration file for the twitter-text Tweet parsing library. This is just an example using regex😇"
          maxLength={280}
          getMessage={twitterStyleMessage}
        />
      </FormGroup>
    </Form>
  )
}

withCustomCharacterCountRenderer.parameters = { happo: { delay: 100 } }
export const WithCustomCharacterCount: Story = {
  render: withCustomCharacterCountRenderer,
}

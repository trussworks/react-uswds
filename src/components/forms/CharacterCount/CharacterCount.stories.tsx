import React, { useRef, useState, type JSX } from 'react'
import { CharacterCount } from './CharacterCount'
import { TextInput } from '../TextInput/TextInput'
import { Textarea } from '../Textarea/Textarea'
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

const TextInputExample = ({
  maxLength = 25,
}: {
  maxLength?: number
}): JSX.Element => {
  const id = 'with-hint-input'
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Form onSubmit={mockSubmit}>
      <FormGroup>
        <Label htmlFor={id}>Text input</Label>
        <span id={`${id}-hint`} className="usa-hint">
          This is an input with a character counter.
        </span>
        <TextInput
          id={id}
          name={id}
          type="text"
          ref={inputRef}
          value={value}
          onChange={(e): void => setValue(e.target.value)}
          aria-describedby={`${id}-info ${id}-hint`}
        />
        <CharacterCount
          id={id}
          maxLength={maxLength}
          inputValue={value}
          inputRef={inputRef}
        />
      </FormGroup>
    </Form>
  )
}

export const TextInputStory: Story = {
  name: 'Text input',
  args: { maxLength: 25 },
  render: (args) => <TextInputExample maxLength={args.maxLength} />,
}

const TextareaExample = ({
  maxLength = 50,
  rows = 2,
}: {
  maxLength?: number
  rows?: number
}): JSX.Element => {
  const id = 'with-hint-textarea'
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <Form onSubmit={mockSubmit}>
      <FormGroup>
        <Label htmlFor={id}>Textarea</Label>
        <span id={`${id}-hint`} className="usa-hint">
          This is a textarea with a character counter.
        </span>
        <Textarea
          id={id}
          name={id}
          inputRef={textareaRef}
          rows={rows}
          value={value}
          onChange={(e): void => setValue(e.target.value)}
          aria-describedby={`${id}-info ${id}-hint`}
        />
        <CharacterCount
          id={`${id}-info`}
          maxLength={maxLength}
          inputValue={value}
          inputRef={textareaRef}
        />
      </FormGroup>
    </Form>
  )
}

export const TextareaStory: Story = {
  name: 'Textarea',
  args: { maxLength: 50 },
  render: (args) => <TextareaExample maxLength={args.maxLength} />,
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

const WithCustomCharacterCountExample = (): JSX.Element => {
  const [customEmojiValue, setCustomEmojiValue] = useState('⭐️⭐️⭐️')
  const [twitterStyleValue, setTwitterStyleValue] = useState(
    'In most cases, the text content of a Tweet can contain up to 280 characters or Unicode glyphs. The exact definition of which characters have weights greater than one character is found in the configuration file for the twitter-text Tweet parsing library. This is just an example using regex 😇'
  )

  const customEmojiInputRef = useRef<HTMLInputElement>(null)
  const twitterStyleInputRef = useRef<HTMLTextAreaElement>(null)

  return (
    <Form onSubmit={mockSubmit}>
      <FormGroup>
        <Label htmlFor="character-count-input">Custom - stars are free</Label>
        <TextInput
          id="character-count-input"
          name="characterCountInput"
          type="text"
          value={customEmojiValue}
          onChange={(e): void => setCustomEmojiValue(e.target.value)}
          aria-describedby="character-count-input-info"
          ref={customEmojiInputRef}
        />
        <CharacterCount
          id="character-count-input-info"
          inputValue={customEmojiValue}
          getCharacterCount={customEmojiCharacterCount}
          getMessage={customEmojiMessage}
          maxLength={10}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="character-count-textarea">Custom - Twitter style</Label>
        <Textarea
          id="character-count-textarea"
          name="characterCountTextArea"
          value={twitterStyleValue}
          onChange={(e): void => setTwitterStyleValue(e.target.value)}
          aria-describedby="character-count-textarea-info"
          ref={twitterStyleInputRef}
        />
        <CharacterCount
          id="character-count-textarea-info"
          inputValue={twitterStyleValue}
          maxLength={280}
          getMessage={twitterStyleMessage}
          inputRef={twitterStyleInputRef}
        />
      </FormGroup>
    </Form>
  )
}

WithCustomCharacterCountExample.parameters = { happo: { delay: 100 } }
export const WithCustomCharacterCount: Story = {
  render: () => <WithCustomCharacterCountExample />,
}

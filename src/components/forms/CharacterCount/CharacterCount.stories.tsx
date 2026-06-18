import React, { useRef, useState, type JSX } from 'react'
import { CharacterCount, useCharacterCount } from './CharacterCount'
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

To use this component, you will need to use the useCharacterCount hook. 
This hook will provide the CharacterCount component with the necessary information to properly render.
The hook's outputs allow you to trigger side effects such as validation status on related components.

You may optionally create a ref to the associated input for automatic html custom validity handling matching the USWDS examples. 

You should be sure to set the appropriate aria properties on the elements that you may choose to compose together.

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

export const TextInputStory: Story = {
  name: 'Text Input',
  render: () => {
    const id = 'with-hint-input'
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const status = useCharacterCount({
      inputValue: value,
      maxLength: 25,
      inputRef,
    })

    return (
      <Form onSubmit={mockSubmit}>
        <FormGroup error={status.isOverLimit}>
          <Label htmlFor={id} error={status.isOverLimit}>
            Text input
          </Label>
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
            validationStatus={status.isOverLimit ? 'error' : undefined}
            aria-describedby={`${id}-info ${id}-hint`}
          />
          <CharacterCount id={`${id}-info`} status={status} />
        </FormGroup>
      </Form>
    )
  },
}

export const TextareaStory: Story = {
  name: 'Textarea',
  render: () => {
    const id = 'with-hint-textarea'
    const [value, setValue] = useState('')
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const status = useCharacterCount({
      inputValue: value,
      maxLength: 50,
      inputRef: textareaRef,
    })

    return (
      <Form onSubmit={mockSubmit}>
        <FormGroup error={status.isOverLimit}>
          <Label htmlFor={id} error={status.isOverLimit}>
            Textarea
          </Label>
          <span id={`${id}-hint`} className="usa-hint">
            This is a textarea with a character counter.
          </span>
          <Textarea
            id={id}
            name={id}
            ref={textareaRef}
            rows={2}
            value={value}
            onChange={(e): void => setValue(e.target.value)}
            error={status.isOverLimit}
            aria-describedby={`${id}-info ${id}-hint`}
          />
          <CharacterCount id={`${id}-info`} status={status} />
        </FormGroup>
      </Form>
    )
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

const WithCustomCharacterCountExample = (): JSX.Element => {
  const [customEmojiValue, setCustomEmojiValue] = useState('⭐️⭐️⭐️')
  const [twitterStyleValue, setTwitterStyleValue] = useState(
    'In most cases, the text content of a Tweet can contain up to 280 characters or Unicode glyphs. The exact definition of which characters have weights greater than one character is found in the configuration file for the twitter-text Tweet parsing library. This is just an example using regex😇'
  )

  const customEmojiInputRef = useRef<HTMLInputElement>(null)
  const twitterStyleInputRef = useRef<HTMLTextAreaElement>(null)

  const customEmojiStatus = useCharacterCount({
    inputValue: customEmojiValue,
    maxLength: 10,
    getCharacterCount: customEmojiCharacterCount,
    getMessage: customEmojiMessage,
    inputRef: customEmojiInputRef,
  })
  const twitterStyleStatus = useCharacterCount({
    inputValue: twitterStyleValue,
    maxLength: 280,
    getMessage: twitterStyleMessage,
    inputRef: twitterStyleInputRef,
  })

  return (
    <Form onSubmit={mockSubmit}>
      <FormGroup error={customEmojiStatus.isOverLimit}>
        <Label
          htmlFor="character-count-input"
          error={customEmojiStatus.isOverLimit}>
          Custom - stars are free
        </Label>
        <TextInput
          id="character-count-input"
          name="characterCountInput"
          type="text"
          value={customEmojiValue}
          onChange={(e): void => setCustomEmojiValue(e.target.value)}
          validationStatus={customEmojiStatus.isOverLimit ? 'error' : undefined}
          aria-describedby="character-count-input-info"
          ref={customEmojiInputRef}
        />
        <CharacterCount
          id="character-count-input-info"
          status={customEmojiStatus}
        />
      </FormGroup>
      <FormGroup error={twitterStyleStatus.isOverLimit}>
        <Label
          htmlFor="character-count-textarea"
          error={twitterStyleStatus.isOverLimit}>
          Custom - Twitter style
        </Label>
        <Textarea
          id="character-count-textarea"
          name="characterCountTextArea"
          value={twitterStyleValue}
          onChange={(e): void => setTwitterStyleValue(e.target.value)}
          error={twitterStyleStatus.isOverLimit}
          aria-describedby="character-count-textarea-info"
          ref={twitterStyleInputRef}
        />
        <CharacterCount
          id="character-count-textarea-info"
          status={twitterStyleStatus}
        />
      </FormGroup>
    </Form>
  )
}

export const WithCustomCharacterCount: Story = {
  render: () => <WithCustomCharacterCountExample />,
  parameters: {
    happo: {
      delay: 100,
    },
  },
}

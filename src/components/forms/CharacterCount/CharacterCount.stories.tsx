import React from 'react'
import { CharacterCount } from './CharacterCount'
import { Form } from '../Form/Form'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'

export default {
  title: 'Components/CharacterCount',
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Character count component

Source: https://designsystem.digital.gov/components/character-count
`,
      },
    },
  },
}
const mockSubmit = (): void => {
  /* mock submit fn */
}

export const textInput = (): React.ReactElement => (
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
        maxLength={25}
      />
    </FormGroup>
  </Form>
)

export const textarea = (): React.ReactElement => (
  <Form onSubmit={mockSubmit}>
    <FormGroup>
      <Label htmlFor="with-hint-textarea">Textarea</Label>
      <span id="with-hint-textarea-hint" className="usa-hint">
        This is a textarea with a character counter.
      </span>
      <CharacterCount
        id="with-hint-textarea"
        name="with-hint-textarea"
        maxLength={50}
        isTextArea
        rows={2}
        aria-describedby="with-hint-textarea-info with-hint-textarea-hint"
      />
    </FormGroup>
  </Form>
)

const withCustomCharacterCount = (): React.ReactElement => {
  const customEmojiCharacterCount = (text: string): number => {
    const starCount = (text.match(/⭐️/g) || []).length
    return Array.from(text).length - starCount * 2
  }

  const customEmojiMessage = (count: number, maxCount: number): string => {
    const remainingCount = maxCount - count
    if (remainingCount >= 0) return `${remainingCount} of ${maxCount} remain`
  }

  const twitterStyleMessage = (count: number, maxCount: number): string => {
    if (maxCount - count < 5) return `${maxCount - count}`
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

withCustomCharacterCount.parameters = { happo: { delay: 100 } }
export { withCustomCharacterCount }

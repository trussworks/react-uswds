import React from 'react'
import { CharacterCount } from './CharacterCount'
import { Form } from '../Form/Form'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'

export default {
  title: 'Forms/CharacterCount',
  parameters: {
    info: `
USWDS 2.0 Character count component

Source: https://designsystem.digital.gov/components/form-controls/#character-count
`,
  },
}

export const textInput = (): React.ReactElement => (
  <FormGroup>
    <Label htmlFor="character-count-id">Text Input</Label>
    <CharacterCount
      id="character-count-id"
      name="characterCount"
      maxLength={10}
    />
  </FormGroup>
)

export const textarea = (): React.ReactElement => (
  <FormGroup>
    <Label htmlFor="character-count-id">Textarea</Label>
    <CharacterCount
      id="character-count-id"
      name="characterCount"
      maxLength={20}
      isTextArea
      rows={20}
    />
  </FormGroup>
)

export const withCustomValidation = (): React.ReactElement => (
  <Form onSubmit={}>
    <FormGroup>
      <Label htmlFor="character-count-input">
        Text Input With Default Value
      </Label>
      <CharacterCount
        id="character-count-input"
        name="characterCountInput"
        defaultValue="Already over the maximum"
        maxLength={10}
      />
    </FormGroup>
    <FormGroup>
      <Label htmlFor="character-count-textarea">Textarea</Label>
      <CharacterCount
        id="character-count-textarea"
        name="characterCountTextArea"
        isTextArea
        maxLength={10}
      />
    </FormGroup>
  </Form>
)

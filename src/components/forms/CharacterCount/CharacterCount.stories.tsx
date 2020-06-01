import React from 'react'
import { CharacterCount } from './CharacterCount'
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

export const textInputCharacterCount = (): React.ReactElement => (
  <CharacterCount
    id="character-count-id"
    name="characterCount"
    maxLength={10}
    label={
      <Label htmlFor="character-count-id">Text Input</Label>
    }></CharacterCount>
)

export const textareaCharacterCount = (): React.ReactElement => (
  <CharacterCount
    id="character-count-id"
    name="characterCount"
    maxLength={10}
    isTextArea={true}
    rows={10}
    label={
      <Label htmlFor="character-count-id">Textarea</Label>
    }></CharacterCount>
)

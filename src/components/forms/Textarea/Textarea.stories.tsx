import React from 'react'
import { Textarea } from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Textarea component

Source: https://designsystem.digital.gov/components/text-input
`,
      },
    },
  },
}

export const defaultTextarea = (): React.ReactElement => (
  <Textarea id="input-type-text" name="input-type-text" />
)

export const withDefaultValue = (): React.ReactElement => (
  <Textarea id="input-value" name="input-value" defaultValue="Change me" />
)

export const withPlaceholder = (): React.ReactElement => (
  <Textarea
    id="input-type-text"
    name="input-type-text"
    placeholder="Enter value"
  />
)

export const error = (): React.ReactElement => (
  <Textarea id="input-error" name="input-error" error />
)

export const success = (): React.ReactElement => (
  <Textarea id="input-success" name="input-success" success />
)

export const disabled = (): React.ReactElement => (
  <Textarea id="input-disabled" name="input-disabled" disabled />
)

export const readonly = (): React.ReactElement => (
  <Textarea id="input-readonly" name="input-readonly" readOnly />
)

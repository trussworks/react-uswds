import React from 'react'
import Textarea from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Textarea component

Source: https://designsystem.digital.gov/components/text-input
`,
      },
    },
  },
}

export const DefaultTextarea = (): React.ReactElement => (
  <Textarea id="input-type-text" name="input-type-text" />
)

export const WithDefaultValue = (): React.ReactElement => (
  <Textarea id="input-value" name="input-value" defaultValue="Change me" />
)

export const WithPlaceholder = (): React.ReactElement => (
  <Textarea
    id="input-type-text"
    name="input-type-text"
    placeholder="Enter value"
  />
)

export const Error = (): React.ReactElement => (
  <Textarea id="input-error" name="input-error" error />
)

export const Success = (): React.ReactElement => (
  <Textarea id="input-success" name="input-success" success />
)

export const Disabled = (): React.ReactElement => (
  <Textarea id="input-disabled" name="input-disabled" disabled />
)

export const Readonly = (): React.ReactElement => (
  <Textarea id="input-readonly" name="input-readonly" readOnly />
)

import { Textarea } from './Textarea'
import { Label } from '../Label/Label'

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

const Template = ({ ...args }) => (
  <>
    <Label htmlFor="input-textarea">Textarea label</Label>
    <Textarea id="input-textarea" name="input-textarea" {...args} />
  </>
)

export const Basic = {
  render: Template,
}

export const WithDefaultValue = {
  render: Template,
  args: { defaultValue: 'Change me' },
}

export const WithPlaceholder = {
  render: Template,
  args: { placeholder: 'Enter value' },
}

export const Error = {
  render: Template,
  args: { error: true },
}

export const Success = {
  render: Template,
  args: { success: true },
}

export const Disabled = {
  render: Template,
  args: { disabled: true },
}

export const Readonly = {
  render: Template,
  args: { defaultValue: 'Readonly value', readOnly: true },
}

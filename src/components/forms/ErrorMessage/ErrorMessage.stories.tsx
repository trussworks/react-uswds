import type { Meta, StoryObj } from '@storybook/react-vite'
import { ErrorMessage } from './ErrorMessage'

const meta = {
  title: 'Components/Form elements/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 ErrorMessage component

Source: https://designsystem.digital.gov/components/form-controls/
`,
      },
    },
  },
} satisfies Meta<typeof ErrorMessage>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultErrorMessage: Story = {
  args: { children: 'Helpful error message' },
}

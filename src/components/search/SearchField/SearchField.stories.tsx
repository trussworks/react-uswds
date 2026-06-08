import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchField } from './SearchField'

const meta = {
  title: 'Components/Search/SearchField',
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Search Field component

Source: https://designsystem.digital.gov/components/search/
`,
      },
    },
  },
  args: { placeholder: 'Search...' },
} satisfies Meta<typeof SearchField>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSearchField: Story = {}

export const BigSearchField: Story = {
  args: { placeholder: 'Type something here...', isBig: true },
}

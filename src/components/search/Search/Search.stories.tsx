import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search } from './Search'

const mockSubmit = (): void => {
  /* mock submit fn */
}

const sampleLocalization = {
  buttonText: 'Buscar',
}

const meta = {
  title: 'Components/Search/Search',
  component: Search,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Search component

Source: https://designsystem.digital.gov/components/search/
`,
      },
    },
  },
  args: { onSubmit: mockSubmit },
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSearch: Story = {}

export const BigSearch: Story = {
  args: { size: 'big' },
}

export const SmallSearch: Story = {
  args: { size: 'small', placeholder: '(Optional) Placeholder Text' },
}

export const DefaultSpanishSearch: Story = {
  args: { i18n: sampleLocalization },
}

export const BigSpanishSearch: Story = {
  args: { size: 'big', i18n: sampleLocalization },
}

export const SmallSpanishSearch: Story = {
  args: {
    size: 'small',
    placeholder: '(Optional) Spanish Placeholder Text',
    i18n: sampleLocalization,
  },
}

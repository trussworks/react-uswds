import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchButton } from './SearchButton'

const sampleLocalization = {
  buttonText: 'Buscar',
}

const meta = {
  title: 'Components/Search/SearchButton',
  component: SearchButton,
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
} satisfies Meta<typeof SearchButton>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSearchButton: Story = {}

export const BigSearchButton: Story = {
  args: { size: 'big' },
}

export const SmallSearch: Story = {
  args: { size: 'small' },
}

export const DefaultSpanishSearchButton: Story = {
  args: { i18n: sampleLocalization },
}

export const BigSpanishSearchButton: Story = {
  args: { size: 'big', i18n: sampleLocalization },
}

export const SmallSpanishSearch: Story = {
  args: { size: 'small', i18n: sampleLocalization },
}

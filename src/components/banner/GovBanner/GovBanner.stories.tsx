import type { Meta, StoryObj } from '@storybook/react-vite'
import { GovBanner } from './GovBanner'

const meta = {
  title: 'Components/Banner',
  component: GovBanner,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Banner component

Source: https://designsystem.digital.gov/components/banner/
`,
      },
    },
  },
  args: { 'aria-label': 'Official government website' },
} satisfies Meta<typeof GovBanner>

export default meta
type Story = StoryObj<typeof meta>

export const GovBannerDefault: Story = {}

export const GovBannerEnglishDotGov: Story = {
  args: { language: 'english', tld: '.gov' },
}

export const GovBannerEnglishDotMil: Story = {
  args: { language: 'english', tld: '.mil' },
}

export const GovBannerSpanishDotGov: Story = {
  args: { language: 'spanish', tld: '.gov' },
}

export const GovBannerSpanishDotMil: Story = {
  args: { language: 'spanish', tld: '.mil' },
}

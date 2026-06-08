import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SocialLinks, SocialLink } from './SocialLinks'

const meta: Meta<typeof SocialLinks> = {
  title: 'Components/Footer/SocialLinks',
  component: SocialLinks,
  parameters: {
    docs: {
      description: {
        component: `
Display social links in styled row. Used in USWDS 3.0 Footer component.

Source: https://designsystem.digital.gov/components/footer
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const links = [
  <SocialLink key="facebook" name="Facebook" href="#" />,
  <SocialLink key="twitter" name="Twitter" href="#" />,
  <SocialLink key="youtube" name="YouTube" href="#" />,
  <SocialLink key="instagram" name="Instagram" href="#" />,
  <SocialLink key="rss" name="RSS" href="#" />,
]

export const Example: Story = {
  render: () => <SocialLinks links={links} />,
}

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PrimaryNav } from './PrimaryNav'

const meta: Meta<typeof PrimaryNav> = {
  title: 'Components/Header/PrimaryNav',
  component: PrimaryNav,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 PrimaryNav component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const mockToggle = (): void => {
  /* mock submit fn */
}

const testBasicHeaderItems = [
  <a className="usa-current" href="#linkOne" key="one">
    <span>Current link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

export const DefaultPrimaryNav: Story = {
  render: () => (
    <PrimaryNav items={testBasicHeaderItems} onToggleMobileNav={mockToggle} />
  ),
}

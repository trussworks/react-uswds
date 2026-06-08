import React from 'react'
import { NavCloseButton } from './NavCloseButton'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Header/NavCloseButton',
  component: NavCloseButton,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 NavCloseButton Component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
} satisfies Meta<typeof NavCloseButton>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultMenuNavCloseButton: Story = {
  render: () => (
    <nav className="usa-nav is-visible">
      <NavCloseButton />
    </nav>
  ),
}

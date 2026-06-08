import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Menu } from './Menu'

const meta: Meta<typeof Menu> = {
  title: 'Components/Header/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Menu component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const testItems = [
  <a href="#linkOne" key="one">
    Simple link
  </a>,
  <a href="#linkTwo" key="two">
    Simple link Two
  </a>,
]

export const DefaultDropDownMenu: Story = {
  render: () => <Menu items={testItems} isOpen={true} />,
}

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavList } from './NavList'

const meta: Meta<typeof NavList> = {
  title: 'Components/Header/NavList',
  component: NavList,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 NavList component used within the Header component

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
    <span>Test link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Test Link Two</span>
  </a>,
]

export const BasicNavList: Story = {
  render: () => <NavList items={testItems} type="primary" />,
}

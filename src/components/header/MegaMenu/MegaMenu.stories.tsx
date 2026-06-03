import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { MegaMenu } from './MegaMenu'

const meta: Meta<typeof MegaMenu> = {
  title: 'Components/Header/MegaMenu',
  component: MegaMenu,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 MegaMenu component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const testItems = [
  [
    <a href="#linkOne" key="one">
      Simple link
    </a>,
    <a href="#linkTwo" key="two">
      Simple link
    </a>,
  ],
  [
    <a href="#linkThree" key="three">
      Simple link Two
    </a>,
    <a href="#linkFour" key="four">
      Simple link Two
    </a>,
  ],
]

export const DefaultMegaMenu: Story = {
  render: () => <MegaMenu items={testItems} key="testItemOne" isOpen={true} />,
}

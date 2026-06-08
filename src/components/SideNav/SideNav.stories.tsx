import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SideNav } from './SideNav'

const meta: Meta<typeof SideNav> = {
  title: 'Components/Side navigation',
  component: SideNav,
}

export default meta
type Story = StoryObj<typeof meta>

const testItems = [
  <a href="#one" className="usa-current" key="one">
    Current page
  </a>,
  <a href="#two" key="two">
    Link one
  </a>,
  <a href="#three" key="three">
    Link two
  </a>,
]

const testSubItems = [
  <a href="#one" className="usa-current" key="one">
    Child link
  </a>,
  <a href="#two" key="two">
    Child link
  </a>,
  <a href="#three" key="three">
    Child link
  </a>,
]

const testItemsWithSubnav = [
  <a href="#two" key="two">
    Parent link
  </a>,
  <>
    <a href="#one" className="usa-current" key="one">
      Current page
    </a>
    <SideNav items={testSubItems} isSubnav={true} />
  </>,
  <a href="#three" key="three">
    Parent link
  </a>,
]

const testItemsThreeLevels = [
  <a href="#two" key="two">
    Parent link
  </a>,
  <>
    <a href="#one" className="usa-current" key="one">
      Current page
    </a>
    <SideNav items={testItemsWithSubnav} isSubnav={true} />
  </>,
  <a href="#three" key="three">
    Parent link
  </a>,
]

export const SingleLevel: Story = {
  render: () => <SideNav items={testItems} />,
}

export const TwoLevels: Story = {
  render: () => <SideNav items={testItemsWithSubnav} />,
}

export const ThreeLevels: Story = {
  render: () => <SideNav items={testItemsThreeLevels} />,
}

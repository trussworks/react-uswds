import React from 'react'
import { SideNav } from './SideNav'

export default {
  title: 'Components/Side navigation',
  component: SideNav,
}

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

export const singleLevel = (): React.ReactElement => (
  <SideNav items={testItems} />
)

export const twoLevels = (): React.ReactElement => (
  <SideNav items={testItemsWithSubnav} />
)

export const threeLevels = (): React.ReactElement => (
  <SideNav items={testItemsThreeLevels} />
)

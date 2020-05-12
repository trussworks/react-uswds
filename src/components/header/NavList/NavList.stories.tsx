import React from 'react'
import { NavList } from './NavList'

export default {
  title: 'Header/NavList',
  parameters: {
    info: `
USWDS 2.0 NavList component

`,
  },
}

const testItems = [
  <a href="#linkOne" key="one">
    <span>Test link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Test Link Two</span>
  </a>,
]

const keyPrefix = 'testItem'

export const BasicNavList = (): React.ReactElement => (
  <NavList
    items={testItems}
    keyPrefix={keyPrefix}
    ulClass="usa-nav__primary usa-accordion"
    liClass="usa-nav__primary-item"
  />
)

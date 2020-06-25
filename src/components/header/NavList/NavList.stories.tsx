import React from 'react'
import { NavList } from './NavList'

export default {
  title: 'Header/NavList',
  parameters: {
    info: `
USWDS 2.0 NavList component used within the Header component

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

export const BasicNavList = (): React.ReactElement => (
  <NavList items={testItems} type="primary" />
)

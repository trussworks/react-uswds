import React from 'react'
import { List } from './List'

export default {
  title: 'Header/List',
  parameters: {
    info: `
USWDS 2.0 List component

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
  <List
    items={testItems}
    keyPrefix={keyPrefix}
    ulClass="usa-nav__primary usa-accordion"
    liClass="usa-nav__primary-item"
  />
)

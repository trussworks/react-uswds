import React from 'react'
import { NavList } from './NavList'

export default {
  title: 'Components/Header/NavList',
  component: NavList,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 NavList component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
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

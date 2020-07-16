import React from 'react'
import { Menu } from './Menu'

export default {
  title: 'Header/Menu',
  component: Menu,
  parameters: {
    info: `
USWDS 2.0 Menu component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testItems = [
  <a href="#linkOne" key="one">
    Simple link
  </a>,
  <a href="#linkTwo" key="two">
    Simple link Two
  </a>,
]

export const defaultDropDownMenu = (): React.ReactElement => (
  <Menu items={testItems} isOpen={true} />
)

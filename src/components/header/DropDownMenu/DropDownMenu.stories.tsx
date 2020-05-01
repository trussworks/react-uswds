import React from 'react'
import { DropDownLink } from './DropDownMenu'
import { Header } from '../Header/Header'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'

export default {
  title: 'DropDownLink',
  parameters: {
    info: `
USWDS 2.0 DropDownLink component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testLabel = 'Nav Label'
const testItems = [
  <a href="#linkOne" key="one">
    Simple link
  </a>,
  <a href="#linkTwo" key="two">
    Simple link Two
  </a>,
]

export const defaultDropDownMenu = (): React.ReactElement => (
  <Header>
    <div className="usa-nav-container">
      <div className="usa-navbar"></div>
      <PrimaryNav
        items={[
          <DropDownLink
            key="testItemOne"
            label={testLabel}
            items={testItems}
            id="test"></DropDownLink>,
        ]}></PrimaryNav>
    </div>
  </Header>
)

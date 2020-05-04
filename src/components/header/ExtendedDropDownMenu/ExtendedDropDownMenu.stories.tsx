import React, { useState } from 'react'
import { ExtendedDropDownLink } from './ExtendedDropDownMenu'
import { Header } from '../Header/Header'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'

export default {
  title: 'ExtendedDropDownLink',
  parameters: {
    info: `
USWDS 2.0 ExtendedDropDownLink component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testLabel = 'Nav Label'
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
const [isOpen, setIsOpen] = useState(false)

const onToggle = (): void => setIsOpen((prvIsOpen) => !prvIsOpen)

export const defaultExtendedDropDownMenu = (): React.ReactElement => (
  <Header>
    <div className="usa-nav-container">
      <div className="usa-navbar"></div>
      <PrimaryNav
        items={[
          <ExtendedDropDownLink
            label={testLabel}
            items={testItems}
            id="test"
            key="testItemOne"
            isOpen={isOpen}
            onToggle={onToggle}></ExtendedDropDownLink>,
        ]}></PrimaryNav>
    </div>
  </Header>
)

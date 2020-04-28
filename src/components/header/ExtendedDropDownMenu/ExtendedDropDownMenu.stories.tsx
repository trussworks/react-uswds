import React from 'react'
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

// It REALLT bothers me that the css classes are SO dependent on one another.....
// This is the only way I could get the drop down link to render correctly on its own
export const defaultExtendedDropDownLink = (): React.ReactElement => (
  <Header>
    <div className="usa-nav-container">
      <div className="usa-navbar"></div>
      <PrimaryNav
        items={[
          <ExtendedDropDownLink
            label={testLabel}
            items={testItems}
            id="test"
            key="testItemOne"></ExtendedDropDownLink>,
        ]}></PrimaryNav>
    </div>
  </Header>
)

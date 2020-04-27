import React from 'react'
import { ExtendedDropDownLink } from './ExtendedDropDownMenu'

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

export const defaultExtendedDropDownLink = (): React.ReactElement => (
  <div className="usa-nav__primary usa-accordion">
    <ExtendedDropDownLink
      label={testLabel}
      items={testItems}
      id="test"></ExtendedDropDownLink>
  </div>
)

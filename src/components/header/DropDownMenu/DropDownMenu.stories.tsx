import React from 'react'
import { DropDownLink } from './DropDownMenu'

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

export const defaultDropDownLink = (): React.ReactElement => (
  <div className="usa-nav__primary usa-accordion">
    <DropDownLink label={testLabel} items={testItems} id="test"></DropDownLink>
  </div>
)

import React from 'react'
import { SecondaryNav } from './SecondaryNav'

export default {
  title: 'SecondaryNav',
  parameters: {
    info: `
USWDS 2.0 SecondaryNav component

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

export const defaultSecondaryNav = (): React.ReactElement => (
  <SecondaryNav label={testLabel} items={testItems}></SecondaryNav>
)

import React from 'react'
import { SubNav } from './SubNav'

export default {
  title: 'SubNav',
  parameters: {
    info: `
USWDS 2.0 SubNav component

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

export const defaultSubNav = (): React.ReactElement => (
  <SubNav label={testLabel} items={testItems}></SubNav>
)

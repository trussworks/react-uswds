import React from 'react'
import { ExtendedNav } from './ExtendedNav'

export default {
  title: 'ExtendedNav',
  parameters: {
    info: `
USWDS 2.0 ExtendedNav component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testPrimaryItems = [
  <a href="#linkOne" key="one">
    <span>Simple link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

const testSecondaryItems = [
  <a href="#linkOne" key="one">
    <span>Simple link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

export const defaultExtendedNav = (): React.ReactElement => (
  <ExtendedNav
    primaryItems={testPrimaryItems}
    secondaryItems={testSecondaryItems}></ExtendedNav>
)

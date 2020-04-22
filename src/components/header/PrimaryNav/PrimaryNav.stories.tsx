import React from 'react'
import { PrimaryNav } from './PrimaryNav'

export default {
  title: 'PrimaryNav',
  parameters: {
    info: `
USWDS 2.0 PrimaryNav component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testItems = [
  <a className="usa-nav__link" href="#linkOne" key="one">
    <span>Simple link</span>
  </a>,
  <a className="usa-nav__link" href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

export const defaultPrimaryNav = (): React.ReactElement => (
  <PrimaryNav items={testItems}></PrimaryNav>
)

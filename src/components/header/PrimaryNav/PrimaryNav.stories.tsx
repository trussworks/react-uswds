import React from 'react'
import { PrimaryNav } from './PrimaryNav'

export default {
  title: 'Header/PrimaryNav',
  parameters: {
    info: `
USWDS 2.0 PrimaryNav component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testBasicHeaderItems = [
  <a className="usa-current" href="#linkOne" key="one">
    <span>Current link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

export const defaultPrimaryNav = (): React.ReactElement => (
  <PrimaryNav items={testBasicHeaderItems} />
)

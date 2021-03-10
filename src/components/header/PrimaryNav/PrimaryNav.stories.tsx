import React from 'react'
import { PrimaryNav } from './PrimaryNav'

export default {
  title: 'Components/Header/PrimaryNav',
  component: PrimaryNav,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 PrimaryNav component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}
const mockToggle = (): void => {
  /* mock submit fn */
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
  <PrimaryNav items={testBasicHeaderItems} onToggleMobileNav={mockToggle} />
)

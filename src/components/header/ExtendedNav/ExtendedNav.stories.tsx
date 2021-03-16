import React from 'react'
import { ExtendedNav } from './ExtendedNav'

export default {
  title: 'Components/Header/ExtendedNav',
  component: ExtendedNav,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 ExtendedNav component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

const mockToggle = (): void => {
  /* mock submit fn */
}

const testPrimaryItems = [
  <a href="#linkOne" key="one" className="usa-nav__link">
    <span>Simple link</span>
  </a>,
  <a href="#linkTwo" key="two" className="usa-nav__link">
    <span>Simple link Two</span>
  </a>,
]

const testSecondaryItems = [
  <a href="#linkOne" key="one">
    Simple link
  </a>,
  <a href="#linkTwo" key="two">
    Simple link Two
  </a>,
]

export const defaultExtendedNav = (): React.ReactElement => (
  <ExtendedNav
    onToggleMobileNav={mockToggle}
    primaryItems={testPrimaryItems}
    secondaryItems={testSecondaryItems}
  />
)

import React, { type JSX } from 'react'
import { ExtendedNav } from './ExtendedNav'

export default {
  title: 'Components/Header/ExtendedNav',
  component: ExtendedNav,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 ExtendedNav component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
    a11y: {
      config: {
        rules: [{ id: 'skip-link', enabled: false }], // Otherwise false-positive on its own
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

export const DefaultExtendedNav = (): JSX.Element => (
  <ExtendedNav
    id="extended-nav"
    onToggleMobileNav={mockToggle}
    primaryItems={testPrimaryItems}
    secondaryItems={testSecondaryItems}
  />
)

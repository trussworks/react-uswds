import React from 'react'
import { NavCloseButton } from './NavCloseButton'

export default {
  title: 'Header/NavCloseButton',
  component: NavCloseButton,
  parameters: {
    info: `
USWDS 2.0 NavCloseButton Component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

export const defaultMenuNavCloseButton = (): React.ReactElement => (
  <nav className="usa-nav is-visible">
    <NavCloseButton />
  </nav>
)

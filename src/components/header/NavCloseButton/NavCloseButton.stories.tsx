import React from 'react'
import { NavCloseButton } from './NavCloseButton'

export default {
  title: 'Components/Header/NavCloseButton',
  component: NavCloseButton,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 NavCloseButton Component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

export const defaultMenuNavCloseButton = (): React.ReactElement => (
  <nav className="usa-nav is-visible">
    <NavCloseButton />
  </nav>
)

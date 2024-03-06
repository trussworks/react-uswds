import React from 'react'
import { NavCloseButton } from './NavCloseButton'

export default {
  title: 'Components/Header/NavCloseButton',
  component: NavCloseButton,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 NavCloseButton Component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

export const DefaultMenuNavCloseButton = (): React.ReactElement => (
  <nav className="usa-nav is-visible">
    <NavCloseButton />
  </nav>
)

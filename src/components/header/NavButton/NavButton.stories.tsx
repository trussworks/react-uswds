import React from 'react'
import { NavButton } from './NavButton'

export default {
  title: 'Header/NavButton',
  parameters: {
    info: `
USWDS 2.0 Header component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

export const defaultMenuNavButton = (): React.ReactElement => (
  <NavButton className="usa-menu-btn">Menu</NavButton>
)

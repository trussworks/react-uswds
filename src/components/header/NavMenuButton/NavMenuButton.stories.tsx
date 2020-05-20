import React from 'react'
import { NavMenuButton } from './NavMenuButton'

export default {
  title: 'Header/NavMenuButton',
  parameters: {
    info: `
USWDS 2.0 NavMenuButton used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

export const defaultMenuNavMenuButton = (): React.ReactElement => (
  <NavMenuButton label="Menu" />
)

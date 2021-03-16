import React from 'react'
import { NavMenuButton } from './NavMenuButton'

export default {
  title: 'Components/Header/NavMenuButton',
  component: NavMenuButton,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 NavMenuButton used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

export const defaultMenuNavMenuButton = (): React.ReactElement => (
  <NavMenuButton label="Menu" />
)

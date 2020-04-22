import React from 'react'
import { Header } from './Header'

export default {
  title: 'Header',
  parameters: {
    info: `
USWDS 2.0 Header component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

export const defaultHeader = (): React.ReactElement => <Header></Header>

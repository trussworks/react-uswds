import React from 'react'
import { Header } from './Header'

import { Title } from '../Title/Title'
import { SearchInput } from '../SearchInput/SearchInput'

export default {
  title: 'Header',
  parameters: {
    info: `
USWDS 2.0 Header component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

export const defaultHeader = (): React.ReactElement => (
  <Header>
    <Title title="Project Title" link="#testLinkOne"></Title>
    <SearchInput onSubmit={mockSubmit}></SearchInput>
  </Header>
)

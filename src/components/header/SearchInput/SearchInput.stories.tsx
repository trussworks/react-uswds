import React from 'react'
import { SearchInput } from './SearchInput'

export default {
  title: 'SearchInput',
  parameters: {
    info: `
USWDS 2.0 SearchInput component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

export const defaultSearchInput = (): React.ReactElement => (
  <SearchInput onSubmit={mockSubmit}></SearchInput>
)

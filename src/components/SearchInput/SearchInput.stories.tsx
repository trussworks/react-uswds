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

export const bigSearchInput = (): React.ReactElement => (
  <SearchInput big={true} onSubmit={mockSubmit}></SearchInput>
)

export const smallSearchInput = (): React.ReactElement => (
  <SearchInput small={true} onSubmit={mockSubmit}></SearchInput>
)

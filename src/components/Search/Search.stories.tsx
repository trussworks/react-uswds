import React from 'react'
import { Search } from './Search'

export default {
  title: 'Search',
  parameters: {
    info: `
USWDS 2.0 Search component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

export const defaultSearch = (): React.ReactElement => (
  <Search onSubmit={mockSubmit} />
)

export const bigSearch = (): React.ReactElement => (
  <Search big onSubmit={mockSubmit} />
)

export const smallSearch = (): React.ReactElement => (
  <Search small onSubmit={mockSubmit} />
)

import React from 'react'
import { Search } from './Search'

export default {
  title: 'Search',
  parameters: {
    info: `
USWDS 2.0 Search component

Source: https://designsystem.digital.gov/components/search/
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
  <Search size="big" onSubmit={mockSubmit} />
)

export const smallSearch = (): React.ReactElement => (
  <Search size="small" onSubmit={mockSubmit} />
)

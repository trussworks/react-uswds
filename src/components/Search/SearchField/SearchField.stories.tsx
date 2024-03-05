import React from 'react'
import { SearchField } from './SearchField'

export default {
  title: 'Components/Search/SearchField',
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Search Field component

Source: https://designsystem.digital.gov/components/search/
`,
      },
    },
  },
}

export const DefaultSearchField = (): React.ReactElement => (
  <SearchField placeholder="Search..." />
)

export const BigSearchField = (): React.ReactElement => (
  <SearchField placeholder="Type something here..." isBig />
)

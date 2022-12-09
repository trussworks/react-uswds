import React from 'react'
import { SearchField } from './SearchField'

export default {
  title: 'Components/SearchField',
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Search Field component

Source: https://designsystem.digital.gov/components/search/
`,
      },
    },
  },
}


export const defaultSearchField = (): React.ReactElement => (
  <SearchField placeholder='Search...' />
)

export const searchFieldWithLabel = (): React.ReactElement => (
    <SearchField placeholder='Type something...' label="Search" />
  )

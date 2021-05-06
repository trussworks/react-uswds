import React from 'react'
import { Search } from './Search'

export default {
  title: 'Components/Search',
  component: Search,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Search component

Source: https://designsystem.digital.gov/components/search/
`,
      },
    },
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

const sampleLocalization = {
  buttonText: 'Buscar',
}

export const defaultSearch = (): React.ReactElement => (
  <Search onSubmit={mockSubmit} />
)

export const bigSearch = (): React.ReactElement => (
  <Search size="big" onSubmit={mockSubmit} />
)

export const smallSearch = (): React.ReactElement => (
  <Search
    placeholder="(Optional) Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
  />
)

export const defaultSpanishSearch = (): React.ReactElement => (
  <Search onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const bigSpanishSearch = (): React.ReactElement => (
  <Search size="big" onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const smallSpanishSearch = (): React.ReactElement => (
  <Search
    placeholder="(Optional) Spanish Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
    i18n={sampleLocalization}
  />
)

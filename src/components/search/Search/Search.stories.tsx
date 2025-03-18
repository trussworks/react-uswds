import React, { type JSX } from 'react'
import { Search } from './Search'

export default {
  title: 'Components/Search/Search',
  component: Search,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Search component

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

export const DefaultSearch = (): JSX.Element => <Search onSubmit={mockSubmit} />

export const BigSearch = (): JSX.Element => (
  <Search size="big" onSubmit={mockSubmit} />
)

export const SmallSearch = (): JSX.Element => (
  <Search
    placeholder="(Optional) Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
  />
)

export const DefaultSpanishSearch = (): JSX.Element => (
  <Search onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const BigSpanishSearch = (): JSX.Element => (
  <Search size="big" onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const SmallSpanishSearch = (): JSX.Element => (
  <Search
    placeholder="(Optional) Spanish Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
    i18n={sampleLocalization}
  />
)

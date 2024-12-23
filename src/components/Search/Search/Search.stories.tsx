import React from 'react'
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

export const DefaultSearch = (): React.ReactElement<any> => (
  <Search onSubmit={mockSubmit} />
)

export const BigSearch = (): React.ReactElement<any> => (
  <Search size="big" onSubmit={mockSubmit} />
)

export const SmallSearch = (): React.ReactElement<any> => (
  <Search
    placeholder="(Optional) Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
  />
)

export const DefaultSpanishSearch = (): React.ReactElement<any> => (
  <Search onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const BigSpanishSearch = (): React.ReactElement<any> => (
  <Search size="big" onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const SmallSpanishSearch = (): React.ReactElement<any> => (
  <Search
    placeholder="(Optional) Spanish Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
    i18n={sampleLocalization}
  />
)

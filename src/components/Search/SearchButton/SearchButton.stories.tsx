import React from 'react'
import { SearchButton } from './SearchButton'

export default {
  title: 'Components/Search/SearchButton',
  component: SearchButton,
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

const sampleLocalization = {
  buttonText: 'Buscar',
}

export const DefaultSearchButton = (): React.ReactElement<any> => <SearchButton />

export const BigSearchButton = (): React.ReactElement<any> => (
  <SearchButton size="big" />
)

export const SmallSearch = (): React.ReactElement<any> => (
  <SearchButton size="small" />
)

export const DefaultSpanishSearchButton = (): React.ReactElement<any> => (
  <SearchButton i18n={sampleLocalization} />
)

export const BigSpanishSearchButton = (): React.ReactElement<any> => (
  <SearchButton size="big" i18n={sampleLocalization} />
)

export const SmallSpanishSearch = (): React.ReactElement<any> => (
  <SearchButton size="small" i18n={sampleLocalization} />
)

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

export const defaultSearchButton = (): React.ReactElement => <SearchButton />

export const bigSearchButton = (): React.ReactElement => (
  <SearchButton size="big" />
)

export const smallSearch = (): React.ReactElement => (
  <SearchButton size="small" />
)

export const defaultSpanishSearchButton = (): React.ReactElement => (
  <SearchButton i18n={sampleLocalization} />
)

export const bigSpanishSearchButton = (): React.ReactElement => (
  <SearchButton size="big" i18n={sampleLocalization} />
)

export const smallSpanishSearch = (): React.ReactElement => (
  <SearchButton size="small" i18n={sampleLocalization} />
)

import React, { type JSX } from 'react'
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

export const DefaultSearchButton = (): JSX.Element => <SearchButton />

export const BigSearchButton = (): JSX.Element => <SearchButton size="big" />

export const SmallSearch = (): JSX.Element => <SearchButton size="small" />

export const DefaultSpanishSearchButton = (): JSX.Element => (
  <SearchButton i18n={sampleLocalization} />
)

export const BigSpanishSearchButton = (): JSX.Element => (
  <SearchButton size="big" i18n={sampleLocalization} />
)

export const SmallSpanishSearch = (): JSX.Element => (
  <SearchButton size="small" i18n={sampleLocalization} />
)

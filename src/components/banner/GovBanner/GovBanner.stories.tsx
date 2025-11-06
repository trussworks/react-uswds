import React, { type JSX } from 'react'
import { GovBanner } from './GovBanner'

export default {
  title: 'Components/Banner',
  component: GovBanner,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Banner component

Source: https://designsystem.digital.gov/components/banner/
`,
      },
    },
  },
}

export const GovBannerDefault = (): JSX.Element => (
  <GovBanner aria-label="Official government website" />
)

export const GovBannerEnglishDotGov = (): JSX.Element => (
  <GovBanner
    language="english"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const GovBannerEnglishDotMil = (): JSX.Element => (
  <GovBanner
    language="english"
    tld=".mil"
    aria-label="Official government website"
  />
)

export const GovBannerSpanishDotGov = (): JSX.Element => (
  <GovBanner
    language="spanish"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const GovBannerSpanishDotMil = (): JSX.Element => (
  <GovBanner
    language="spanish"
    tld=".mil"
    aria-label="Official government website"
  />
)

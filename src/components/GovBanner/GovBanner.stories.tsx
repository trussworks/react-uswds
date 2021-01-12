import React from 'react'
import { GovBanner } from './GovBanner'

export default { title: 'GovBanner', component: GovBanner }

export const govBannerDefault = (): React.ReactElement => (
  <GovBanner aria-label="Official government website" />
)

export const govBannerEnglishDotGov = (): React.ReactElement => (
  <GovBanner
    language="english"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const govBannerEnglishDotMil = (): React.ReactElement => (
  <GovBanner
    language="english"
    tld=".mil"
    aria-label="Official government website"
  />
)

export const govBannerSpanishDotGov = (): React.ReactElement => (
  <GovBanner
    language="spanish"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const govBannerSpanishDotMil = (): React.ReactElement => (
  <GovBanner
    language="spanish"
    tld=".mil"
    aria-label="Official government website"
  />
)

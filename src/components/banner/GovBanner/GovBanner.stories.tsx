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

export const GovBannerDefault = (): React.ReactElement => (
  <GovBanner aria-label="Official government website" />
)

export const GovBannerEnglishDotGov = (): React.ReactElement => (
  <GovBanner
    language="english"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const GovBannerEnglishDotMil = (): React.ReactElement => (
  <GovBanner
    language="english"
    tld=".mil"
    aria-label="Official government website"
  />
)

export const GovBannerSpanishDotGov = (): React.ReactElement => (
  <GovBanner
    language="spanish"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const GovBannerSpanishDotMil = (): React.ReactElement => (
  <GovBanner
    language="spanish"
    tld=".mil"
    aria-label="Official government website"
  />
)

import React from 'react'
import { GovBanner } from './GovBanner'

export default { title: 'Components/Banner', component: GovBanner }

export const govBanner = (): React.ReactElement => (
  <GovBanner aria-label="Official government website" />
)

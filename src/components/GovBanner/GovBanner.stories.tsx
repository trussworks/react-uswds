import React from 'react'
import { GovBanner } from './GovBanner'

export default { title: 'GovBanner', component: GovBanner }

export const govBanner = (): React.ReactElement => (
  <GovBanner aria-label="Official government website" />
)

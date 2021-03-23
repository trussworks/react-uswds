import React from 'react'

import { IdentifierLogo } from './IdentifierLogo'

// assets
// import logoImg from 'uswds/src/img/logo-img.png'
import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

export default {
  title: 'Components/Identifier/Logo',
  component: IdentifierLogo,
  parameters: {
    docs: {
      description: {
        component: `
        Display optional agency logos as links.  Used in USWDS 2.0 Identifier component.
        
        Source: https://designsystem.digital.gov/components/identifier/
        `,
      },
    },
  },
}

export const OneLogo = (): React.ReactElement => (
  <div className="">
    <IdentifierLogo
      image={<img className="" src={dotGovIcon} alt="Mock logo" />}
    />
  </div>
)

export const TwoLogos = (): React.ReactElement => (
  <div className="">
    <IdentifierLogo
      image={<img className="" src={dotGovIcon} alt="Mock logo" />}
    />
    <IdentifierLogo
      image={<img className="" src={dotGovIcon} alt="Mock logo" />}
    />
  </div>
)

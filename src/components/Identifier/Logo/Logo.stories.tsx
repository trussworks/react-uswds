import React from 'react'

import { Logo } from './Logo'

// assets
import logoImg from 'uswds/src/img/logo-img.png'

export default {
  title: 'Components/Identifier/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: `
        Display optional logo images.  Used in USWDS 2.0 Identifier component.
        
        Source: https://designsystem.digital.gov/components/identifier/
        `,
      },
    },
  },
}

export const OneLogo = (): React.ReactElement => (
  <div className="">
    <Logo image={<img className="" src={logoImg} alt="Mock logo" />} />
  </div>
)

export const TwoLogos = (): React.ReactElement => (
  <div className="">
    <Logo image={<img className="" src={logoImg} alt="Mock logo" />} />
    <Logo image={<img className="" src={logoImg} alt="Mock logo" />} />
  </div>
)

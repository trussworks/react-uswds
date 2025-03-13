import React, { type JSX } from 'react'

import { Logo } from './Logo'

// assets
import logoImg from '@uswds/uswds/img/logo-img.png'

export default {
  title: 'Components/Footer/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: `
Display logo image with optional heading.  Used in USWDS 3.0 Footer component.

Source: https://designsystem.digital.gov/components/footer
`,
      },
    },
  },
}

export const Slim = (): JSX.Element => (
  <div className="usa-footer__secondary-section">
    <Logo
      size="slim"
      image={
        <img className="usa-footer__logo-img" src={logoImg} alt="Mock logo" />
      }
      heading={<p className="usa-footer__logo-heading">Name of Agency</p>}
    />
  </div>
)

export const NoHeading = (): JSX.Element => (
  <div className="usa-footer__secondary-section">
    <Logo
      image={
        <img className="usa-footer__logo-img" src={logoImg} alt="Mock logo" />
      }
    />
  </div>
)

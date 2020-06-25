import React from 'react'

import { Logo } from './Logo'

// assets
import logoImg from 'uswds/src/img/logo-img.png'

export default {
  title: 'Footer/Logo',
  parameters: {
    info: `
    Display logo image with optional heading.  Used in USWDS 2.0 Footer component.

    Source: https://designsystem.digital.gov/components/form-controls/#footer
    `,
  },
}

export const Slim = (): React.ReactElement => (
  <div className="usa-footer__secondary-section">
    <Logo
      size="slim"
      image={
        <img className="usa-footer__logo-img" src={logoImg} alt="Mock logo" />
      }
      heading={<h3 className="usa-footer__logo-heading">Name of Agency</h3>}
    />
  </div>
)

export const NoHeading = (): React.ReactElement => (
  <div className="usa-footer__secondary-section">
    <Logo
      image={
        <img className="usa-footer__logo-img" src={logoImg} alt="Mock logo" />
      }
    />
  </div>
)

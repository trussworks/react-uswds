import React from 'react'

import { Logo } from './Logo'

export default {
  title: 'Logo',
  parameters: {
    info: `
    Used within USWDS 2.0 Footer component
    
    Source: https://designsystem.digital.gov/components/form-controls/#footer
    `,
  },
}

export const Slim = (): React.ReactElement => (
  <div className="usa-footer__secondary-section">
    <Logo
      slim
      image={
        <img
          className="usa-footer__logo-img"
          src="/logo-img.png"
          alt="Mock logo"
        />
      }
      heading={<h3 className="usa-footer__logo-heading">Name of Agency</h3>}
    />
  </div>
)

export const NoHeading = (): React.ReactElement => (
  <div className="usa-footer__secondary-section">
    <Logo
      image={
        <img
          className="usa-footer__logo-img"
          src="/logo-img.png"
          alt="Mock logo"
        />
      }
    />
  </div>
)

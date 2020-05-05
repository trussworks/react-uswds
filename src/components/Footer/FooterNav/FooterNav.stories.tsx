/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { FooterNav } from './FooterNav'

export default {
  title: 'FooterNav',
  parameters: {
    info: `
    Used in USWDS 2.0 Footer component
    
    Source: https://designsystem.digital.gov/components/form-controls/#footer
    `,
  },
}

export const SlimFooterNav = (): React.ReactElement => (
  <FooterNav
    slim
    links={Array(4).fill(
      <a className="usa-footer__primary-link" href="#">
        PrimaryLink
      </a>
    )}
  />
)

export const MediumFooterNav = (): React.ReactElement => (
  <FooterNav
    medium
    links={Array(4).fill(
      <a className="usa-footer__primary-link" href="#">
        PrimaryLink
      </a>
    )}
  />
)

/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { FooterNav } from './FooterNav'

export default {
  title: 'Footer/FooterNav',
  parameters: {
    info: `
     Display single list of nav items, or grouped nav items in an extended nav. Used in USWDS 2.0 Footer component.
    
    Source: https://designsystem.digital.gov/components/form-controls/#footer
    `,
  },
}

export const SlimFooterNav = (): React.ReactElement => (
  <FooterNav
    aria-label="Footer navigation"
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
    aria-label="Footer navigation"
    medium
    links={Array(4).fill(
      <a className="usa-footer__primary-link" href="#">
        PrimaryLink
      </a>
    )}
  />
)

export const BigFooterNav = (): React.ReactElement => (
  <FooterNav
    aria-label="Footer navigation"
    big
    links={[
      ['Topic', ...Array(3).fill(<a href="#">Secondary link</a>)],
      [
        'Topic',
        <a key="2" href="#">
          Secondary link that is pretty long
        </a>,
        ...Array(2).fill(<a href="#">Secondary link</a>),
      ],
      ['Topic', ...Array(3).fill(<a href="#">Secondary link</a>)],
    ]}
  />
)

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

export const BigFooterNav = (): React.ReactElement => (
  <FooterNav
    big
    links={[
      [
        <h4 key="1" className="usa-footer__primary-link">
          Topic
        </h4>,
        ...Array(3).fill(
          <a className="usa-footer__secondary-link" href="#">
            Secondary link
          </a>
        ),
      ],
      [
        <h4 key="1" className="usa-footer__primary-link">
          Topic
        </h4>,
        <a key="2" className="usa-footer__secondary-link" href="#">
          Secondary link that is pretty long
        </a>,
        ...Array(2).fill(
          <a className="usa-footer__secondary-link" href="#">
            Secondary link
          </a>
        ),
      ],
      [
        <h4 key="1" className="usa-footer__primary-link">
          Topic
        </h4>,
        ...Array(3).fill(
          <a className="usa-footer__secondary-link" href="#">
            Secondary link
          </a>
        ),
      ],
    ]}
  />
)

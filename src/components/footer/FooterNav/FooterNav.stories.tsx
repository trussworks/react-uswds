/*  eslint-disable jsx-a11y/anchor-is-valid */
import React, { type JSX } from 'react'

import { Footer } from '../Footer/Footer'
import { FooterNav } from './FooterNav'

export default {
  title: 'Components/Footer/FooterNav',
  component: FooterNav,
  parameters: {
    docs: {
      description: {
        component: `
Display single list of nav items, or grouped nav items in an extended nav. Used in USWDS 3.0 Footer component.

Source: https://designsystem.digital.gov/components/footer
`,
      },
    },
  },
}

export const SlimFooterNav = (): JSX.Element => (
  <FooterNav
    aria-label="Footer navigation"
    size="slim"
    links={Array.from({ length: 4 }, (_x, i) => (
      <a key={`primary_${i}`} className="usa-footer__primary-link" href="#">
        PrimaryLink
      </a>
    ))}
  />
)

export const MediumFooterNav = (): JSX.Element => (
  <FooterNav
    aria-label="Footer navigation"
    size="medium"
    links={Array.from({ length: 4 }, (_x, i) => (
      <a key={`primary_${i}`} className="usa-footer__primary-link" href="#">
        PrimaryLink
      </a>
    ))}
  />
)

export const BigFooterNav = {
  render: (): JSX.Element => (
    <Footer
      size="big"
      primary={
        <FooterNav
          aria-label="Footer navigation"
          size="big"
          links={[
            [
              'Topic',
              ...Array.from({ length: 3 }, (_x, i) => (
                <a key={`topic_0_${i}`} href="#">
                  Secondary link
                </a>
              )),
            ],
            [
              'Topic',
              <a key="topic_1_0" href="#">
                Secondary link that is pretty long
              </a>,
              ...Array.from({ length: 2 }, (_x, i) => (
                <a key={`topic_1_${i + 1}`} href="#">
                  Secondary link
                </a>
              )),
            ],
            [
              'Topic',
              ...Array.from({ length: 3 }, (_x, i) => (
                <a key={`topic_2_${i}`} href="#">
                  Secondary link
                </a>
              )),
            ],
          ]}
        />
      }
      secondary={<></>}
    />
  ),

  parameters: {
    happo: { waitForContent: 'Secondary link that is pretty long' },
  },
}

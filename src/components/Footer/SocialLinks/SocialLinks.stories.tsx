/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { SocialLinks } from './SocialLinks'

export default {
  title: 'Components/Footer/SocialLinks',
  component: SocialLinks,
  parameters: {
    docs: {
      description: {
        component: `
Display social links in styled row. Used in USWDS 2.0 Footer component.

Source: https://designsystem.digital.gov/components/footer
`,
      },
    },
  },
}

const links = [
  <a
    key="facebook"
    className="usa-social-link usa-social-link--facebook"
    href="#">
    <span>Facebook</span>
  </a>,
  <a
    key="twitter"
    className="usa-social-link usa-social-link--twitter"
    href="#">
    <span>Twitter</span>
  </a>,
  <a
    key="youtube"
    className="usa-social-link usa-social-link--youtube"
    href="#">
    <span>YouTube</span>
  </a>,
  <a
    key="instagram"
    className="usa-social-link usa-social-link--instagram"
    href="#">
    <span>Instagram</span>
  </a>,
  <a key="rss" className="usa-social-link usa-social-link--rss" href="#">
    <span>RSS</span>
  </a>,
]
export const Example = (): React.ReactElement => <SocialLinks links={links} />

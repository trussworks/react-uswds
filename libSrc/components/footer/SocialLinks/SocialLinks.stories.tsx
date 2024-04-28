/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import SocialLink from '../SocialLink/SocialLink.js'
import SocialLinks from './SocialLinks.js'

export default {
  title: 'Components/Footer/SocialLinks',
  component: SocialLinks,
  parameters: {
    docs: {
      description: {
        component: `
Display social links in styled row. Used in USWDS 3.0 Footer component.

Source: https://designsystem.digital.gov/components/footer
`,
      },
    },
  },
}

const links = [
  <SocialLink key="facebook" name="Facebook" href="#" />,
  <SocialLink key="twitter" name="Twitter" href="#" />,
  <SocialLink key="youtube" name="YouTube" href="#" />,
  <SocialLink key="instagram" name="Instagram" href="#" />,
  <SocialLink key="rss" name="RSS" href="#" />,
]
export const Example = (): React.ReactElement => <SocialLinks links={links} />

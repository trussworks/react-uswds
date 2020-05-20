/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */
import React from 'react'

import { FooterExtendedNavList } from './FooterExtendedNavList'

export default {
  title: 'Footer/FooterExtendedNavList',
  parameters: {
    info: `
     Display grouped nav items in an extended nav. Used in  "big" USWDS 2.0 Footer component.
    
    Source: https://designsystem.digital.gov/components/form-controls/#footer
    `,
  },
}

export const Default = (): React.ReactElement => (
  <div className="usa-footer--big ">
    <FooterExtendedNavList
      nestedLinks={[
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
  </div>
)

export const Mobile = (): React.ReactElement => (
  <div className="usa-footer--big ">
    <FooterExtendedNavList
      isMobile
      nestedLinks={[
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
  </div>
)

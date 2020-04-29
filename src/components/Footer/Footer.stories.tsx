/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classnames from 'classnames'

import { Address } from './Address/Address'
import { Button } from '../Button/Button'
import { Footer } from './Footer'
import { Logo } from './Logo/Logo'

export default {
  title: 'Footer',
  parameters: {
    info: `
  USWDS 2.0 Footer component
  
  Source: https://designsystem.digital.gov/components/form-controls/#footer
  `,
  },
}

type SizeProps = {
  big?: boolean
  medium?: boolean
  slim?: boolean
}

// Placeholder until a dynamic Nav is built out and can be used
const MockNav = ({ medium, slim }: SizeProps): React.ReactElement => {
  const itemClasses = classnames(
    'desktop:grid-col-auto usa-footer__primary-content',
    {
      'mobile-lg:grid-col-4': medium,
      'mobile-lg:grid-col-6': slim,
    }
  )

  const items = Array(4).fill({
    href: 'javascript:void(0);',
    heading: 'Primary Link',
  })

  return (
    <nav className="usa-footer__nav" aria-label="Footer navigation">
      <ul className="grid-row grid-gap">
        {items.map((item, i) => (
          <li key={`navItem-${i}`} className={itemClasses}>
            <a className="usa-footer__primary-link" href={item.href}>
              {item.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const returnToTop = (
  <div className="grid-container usa-footer__return-to-top">
    <Button type="button" unstyled>
      Return to top
    </Button>
  </div>
)

export const SlimFooter = (): React.ReactElement => (
  <Footer
    slim
    returnToTop={returnToTop}
    primary={
      <div className="usa-footer__primary-container grid-row">
        <div className="mobile-lg:grid-col-8">
          <MockNav slim />
        </div>
        <div className="tablet:grid-col-4">
          <Address
            items={[
              <a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>,
              <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>,
            ]}
          />
        </div>
      </div>
    }
    secondary={
      <Logo
        slim
        image={
          <img
            className="usa-footer__logo-img"
            src="/logo-img.png"
            alt="img alt text"
          />
        }
        heading={<h3 className="usa-footer__logo-heading">Name of Agency</h3>}
      />
    }
  />
)

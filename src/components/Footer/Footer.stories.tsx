/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classnames from 'classnames'

import { Footer } from './Footer'

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

const Address = (): React.ReactElement => (
  <address className="usa-footer__address">
    <div className="grid-row grid-gap">
      <div className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
        <div className="usa-footer__contact-info">
          <a href="tel:1-800-555-5555"> (800) CALL-GOVT</a>
        </div>
      </div>
      <div className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
        <div className="usa-footer__contact-info">
          <a href="mailto:info@agency.gov"> </a>info@agency.gov
        </div>
      </div>
    </div>
  </address>
)

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

const Logo = ({ big, medium, slim }: SizeProps): React.ReactElement => {
  const containerClasses = classnames('usa-footer__logo grid-row', {
    'mobile-lg:grid-col-6 mobile-lg:grid-gap-2': big || medium,
    'grid-gap-2': slim,
  })

  return (
    <div className={containerClasses}>
      <div className="grid-col-auto">
        <img className="usa-footer__logo-img" src="#" alt="img alt text" />
      </div>
      <div className="grid-col-auto">
        <h3 className="usa-footer__logo-heading">Name of Agency</h3>
      </div>
    </div>
  )
}

export const SlimFooter = (): React.ReactElement => (
  <Footer
    slim
    primary={
      <div className="usa-footer__primary-container grid-row">
        <div className="mobile-lg:grid-col-8">
          <MockNav slim />
        </div>
        <div className="tablet:grid-col-4">
          <Address />
        </div>
      </div>
    }
    secondary={<Logo slim />}
  />
)

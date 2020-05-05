/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Address } from './Address/Address'
import { Button } from '../Button/Button'
import { Footer } from './Footer'
import { FooterNav } from './FooterNav/FooterNav'
import { Logo } from './Logo/Logo'
import { SocialLinks } from './SocialLinks/SocialLinks'

export default {
  title: 'Footer',
  parameters: {
    info: `
  USWDS 2.0 Footer component
  
  Source: https://designsystem.digital.gov/components/form-controls/#footer
  `,
  },
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
          <FooterNav
            slim
            links={Array(4).fill(
              <a className="usa-footer__primary-link" href="#">
                Primary Link
              </a>
            )}
          />
        </div>
        <div className="tablet:grid-col-4">
          <Address
            slim
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

export const MediumFooter = (): React.ReactElement => (
  <Footer
    medium
    returnToTop={returnToTop}
    primary={
      <FooterNav
        medium
        links={Array(4).fill(
          <a className="usa-footer__primary-link" href="#">
            Primary Link
          </a>
        )}
      />
    }
    secondary={
      <div className="grid-row grid-gap">
        <Logo
          medium
          image={
            <img
              className="usa-footer__logo-img"
              src="/logo-img.png"
              alt="img alt text"
            />
          }
          heading={<h3 className="usa-footer__logo-heading">Name of Agency</h3>}
        />
        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
          <SocialLinks
            links={[
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
                key="rss"
                className="usa-social-link usa-social-link--rss"
                href="#">
                <span>RSS</span>
              </a>,
            ]}
          />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
          <Address
            medium
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
  />
)

export const BigFooter = (): React.ReactElement => (
  <Footer
    big
    returnToTop={returnToTop}
    primary={
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-8">
            <FooterNav
              big
              links={[
                [
                  <h4 key="1" className="usa-footer__primary-link">
                    Topic
                  </h4>,
                  ...Array(2).fill(
                    <a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>
                  ),
                  <a key="4" className="usa-footer__secondary-link" href="#">
                    Secondary link that is a bit longer than most of the others
                  </a>,
                  <a key="5" className="usa-footer__secondary-link" href="#">
                    Secondary link
                  </a>,
                ],
                [
                  <h4 key="1" className="usa-footer__primary-link">
                    Topic
                  </h4>,
                  <a key="2" className="usa-footer__secondary-link" href="#">
                    Secondary link that is pretty long
                  </a>,
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
                  ...Array(4).fill(
                    <a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>
                  ),
                ],
                [
                  <h4 key="1" className="usa-footer__primary-link">
                    Topic
                  </h4>,
                  ...Array(4).fill(
                    <a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>
                  ),
                ],
              ]}
            />
          </div>
        </div>
      </div>
    }
    secondary={
      <div className="grid-row grid-gap">
        <Logo
          big
          image={
            <img
              className="usa-footer__logo-img"
              src="/logo-img.png"
              alt="img alt text"
            />
          }
          heading={<h3 className="usa-footer__logo-heading">Name of Agency</h3>}
        />
        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
          <SocialLinks
            links={[
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
                key="rss"
                className="usa-social-link usa-social-link--rss"
                href="#">
                <span>RSS</span>
              </a>,
            ]}
          />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
          <Address
            big
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
  />
)

/*  eslint-disable jsx-a11y/anchor-is-valid */
import React, { type JSX } from 'react'

import { Address } from '../Address/Address'
import { Button } from '../../Button/Button'
import { Footer } from './Footer'
import { FooterNav } from '../FooterNav/FooterNav'
import { Form } from '../../forms/Form/Form'
import { Label } from '../../forms/Label/Label'
import { Logo } from '../Logo/Logo'
import { SocialLinks, SocialLink } from '../SocialLinks/SocialLinks'
import { TextInput } from '../../forms/TextInput/TextInput'

// assets
import logoImg from '@uswds/uswds/img/logo-img.png'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Footer component

Source: https://designsystem.digital.gov/components/footer
`,
      },
    },
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

const returnToTop = (
  <div className="grid-container usa-footer__return-to-top">
    <Button type="button" unstyled>
      Return to top
    </Button>
  </div>
)

const socialLinkItems = [
  <SocialLink key="facebook" name="Facebook" href="#" />,
  <SocialLink key="twitter" name="Twitter" href="#" />,
  <SocialLink key="youtube" name="YouTube" href="#" />,
  <SocialLink key="instagram" name="Instagram" href="#" />,
  <SocialLink key="rss" name="RSS" href="#" />,
]

const SignUpForm = (): JSX.Element => {
  return (
    <div className="usa-sign-up">
      <h3 className="usa-sign-up__heading">Sign up</h3>
      <Form onSubmit={mockSubmit}>
        <Label htmlFor="email">Your email address</Label>
        <TextInput id="email" name="email" type="email" />
        <Button type="submit">Sign up</Button>
      </Form>
    </div>
  )
}

export const SlimFooter = (): JSX.Element => (
  <Footer
    size="slim"
    returnToTop={returnToTop}
    primary={
      <div className="usa-footer__primary-container grid-row">
        <div className="mobile-lg:grid-col-8">
          <FooterNav
            size="slim"
            links={Array(4).fill(
              <a className="usa-footer__primary-link" href="#">
                Primary Link
              </a>
            )}
          />
        </div>
        <div className="tablet:grid-col-4">
          <Address
            size="slim"
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
        size="slim"
        image={
          <img
            className="usa-footer__logo-img"
            alt="img alt text"
            src={logoImg}
          />
        }
        heading={<p className="usa-footer__logo-heading">Name of Agency</p>}
      />
    }
  />
)

export const MediumFooter = (): JSX.Element => (
  <Footer
    size="medium"
    returnToTop={returnToTop}
    primary={
      <FooterNav
        size="medium"
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
          size="medium"
          image={
            <img
              className="usa-footer__logo-img"
              alt="img alt text"
              src={logoImg}
            />
          }
          heading={<p className="usa-footer__logo-heading">Name of Agency</p>}
        />
        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
          <SocialLinks links={socialLinkItems} />
          <p className="usa-footer__contact-heading">Agency Contact Center</p>
          <Address
            size="medium"
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

export const BigFooter = (): JSX.Element => (
  <Footer
    size="big"
    returnToTop={returnToTop}
    primary={
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-8">
            <FooterNav
              size="big"
              links={[
                [
                  'Topic',
                  ...Array(2).fill(<a href="#">Secondary link</a>),
                  <a key="4" href="#">
                    Secondary link that is a bit longer than most of the others
                  </a>,
                  <a key="5" href="#">
                    Secondary link
                  </a>,
                ],
                [
                  'Topic',
                  <a key="2" href="#">
                    Secondary link that is pretty long
                  </a>,
                  ...Array(3).fill(<a href="#">Secondary link</a>),
                ],
                [
                  'Topic',
                  ...Array(4).fill(
                    <a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>
                  ),
                ],
                [
                  'Topic',
                  ...Array(4).fill(
                    <a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>
                  ),
                ],
              ]}
            />
          </div>
          <div className="tablet:grid-col-4">
            <SignUpForm />
          </div>
        </div>
      </div>
    }
    secondary={
      <div className="grid-row grid-gap">
        <Logo
          size="big"
          image={
            <img
              className="usa-footer__logo-img"
              alt="img alt text"
              src={logoImg}
            />
          }
          heading={<p className="usa-footer__logo-heading">Name of Agency</p>}
        />
        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
          <SocialLinks links={socialLinkItems} />
          <p className="usa-footer__contact-heading">Agency Contact Center</p>
          <Address
            size="big"
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

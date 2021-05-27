/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  GridContainer,
  Grid,
  FooterNav,
  Logo,
  SocialLinks,
  Address,
  GovBanner,
  Header,
  Title,
  Link,
  Footer,
  Identifier,
  IdentifierMasthead,
  IdentifierLogos,
  IdentifierLogo,
  IdentifierIdentity,
  IdentifierLinks,
  IdentifierLinkItem,
  IdentifierLink,
  IdentifierGov,
  Form,
  Fieldset,
  TextInput,
  Label,
  Button,
} from '../../index'

import logoImg from 'uswds/src/img/logo-img.png'
import circleSvg from 'uswds/src/img/circle-gray-20.svg'

export default {
  title: 'Page Templates/Authentication Pages',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
  Page templates
  `,
      },
    },
  },
}

const returnToTop = (
  <GridContainer className="usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </GridContainer>
)

const footerPrimary = (
  <FooterNav
    aria-label="Footer navigation"
    size="medium"
    links={Array(5).fill(
      <a href="javascript:void(0);" className="usa-footer__primary-link">
        Primary link
      </a>
    )}
  />
)

const footerSecondary = (
  <>
    <Grid row gap>
      <Logo
        medium
        image={<img className="usa-footer__logo-img" src={logoImg} alt="" />}
        heading={<p className="usa-footer__logo-heading">Name of Agency</p>}
      />
      <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
        <SocialLinks
          links={[
            <a
              key="facebook"
              className="usa-social-link usa-social-link--facebook"
              href="javascript:void(0);">
              <span>Facebook</span>
            </a>,
            <a
              key="twitter"
              className="usa-social-link usa-social-link--twitter"
              href="javascript:void(0);">
              <span>Twitter</span>
            </a>,
            <a
              key="youtube"
              className="usa-social-link usa-social-link--youtube"
              href="javascript:void(0);">
              <span>YouTube</span>
            </a>,
            <a
              key="instagram"
              className="usa-social-link usa-social-link--instagram"
              href="#">
              <span>Instagram</span>
            </a>,
            <a
              key="rss"
              className="usa-social-link usa-social-link--rss"
              href="javascript:void(0);">
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
      </Grid>
    </Grid>
  </>
)

const identifierLinksText = [
  'About <Parent shortname>',
  'Accessibility support',
  'FOIA requests',
  'No FEAR Act data',
  'Office of the Inspector General',
  'Performance reports',
  'Privacy policy',
]

const mockSubmit = (): void => {
  /* Blank function for mocking form submission */
}

export const SignIn = (): React.ReactElement => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>

      <GovBanner />
      <Header extended>
        <div className="usa-navbar">
          <Title id="extended-logo">
            <a href="/" title="Home" aria-label="Home">
              Project title
            </a>
          </Title>
        </div>
      </Header>

      <main id="main-content">
        <div className="bg-base-lightest">
          <GridContainer className="usa-section">
            <Grid row={true} className="flex-justify-center">
              <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 6 }}>
                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                  <h1 className="margin-bottom-0">Sign in</h1>
                  <Form onSubmit={mockSubmit}>
                    <Fieldset legend="Access your account" legendStyle="large">
                      <Label htmlFor="email">Email address</Label>
                      <TextInput
                        id="email"
                        name="email"
                        type="email"
                        autoCorrect="off"
                        autoCapitalize="off"
                        required={true}
                      />

                      <Label htmlFor="email">Password</Label>
                      <TextInput
                        id="password-sign-in"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoCorrect="off"
                        autoCapitalize="off"
                        required={true}
                      />

                      <p className="usa-form__note">
                        <a
                          title="Show password"
                          href="javascript:void(0);"
                          className="usa-show-password"
                          aria-controls="password-create-account password-create-account-confirm"
                          onClick={(): void =>
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? 'Hide password' : 'Show password'}
                        </a>
                      </p>

                      <Button type="submit">Sign in</Button>

                      <p>
                        <Link href="javascript:void();">Forgot password?</Link>
                      </p>
                    </Fieldset>
                  </Form>
                </div>

                <p className="text-center">
                  {"Don't have an account? "}
                  <Link href="javascript:void();">Create your account now</Link>
                  .
                </p>

                <div className="border-top border-base-lighter margin-top-3 padding-top-1">
                  <h2>Are you a federal employee?</h2>
                  <div className="usa-prose">
                    <p>
                      If you are a federal employee or [other secondary user],
                      please use [secondary Single Sign On (SSO)].
                    </p>
                    <p>
                      <Button type="button" outline={true}>
                        Launch secondary SSO
                      </Button>
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </GridContainer>
        </div>
      </main>

      <Footer
        returnToTop={returnToTop}
        primary={footerPrimary}
        secondary={footerSecondary}
      />

      <Identifier>
        <IdentifierMasthead aria-label="Agency identifier">
          <IdentifierLogos>
            <IdentifierLogo href="#">
              <img
                className="usa-identifier__logo-img"
                src={circleSvg}
                alt="<Parent agency> logo"
              />
            </IdentifierLogo>
          </IdentifierLogos>
          <IdentifierIdentity domain="domain.gov">
            An official website of the <Link href="#">{`<Parent agency>`}</Link>
          </IdentifierIdentity>
        </IdentifierMasthead>
        <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
          {identifierLinksText.map((text, idx) => (
            <IdentifierLinkItem key={idx}>
              <IdentifierLink href="#">{text}</IdentifierLink>
            </IdentifierLinkItem>
          ))}
        </IdentifierLinks>
        <IdentifierGov aria-label="U.S. government information and services">
          <div className="usa-identifier__usagov-description">
            Looking for U.S. government information and services?
          </div>
          &nbsp;
          <Link href="https://www.usa.gov/" className="usa-link">
            Visit USA.gov
          </Link>
        </IdentifierGov>
      </Identifier>
    </>
  )
}

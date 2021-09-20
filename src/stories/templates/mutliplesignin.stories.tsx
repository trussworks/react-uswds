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

export const MultipleSignInOptions = (): React.ReactElement => {
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
            <Grid
              row={true}
              className="margin-x-neg-205 margin-bottom-7 flex-justify-center">
              <Grid
                col={12}
                mobileLg={{ col: 10 }}
                tablet={{ col: 8 }}
                desktop={{ col: 6 }}
                className="padding-x-205 margin-bottom-7">
                <h1 className="desktop:display-none font-sans-lg margin-bottom-4 tablet:margin-top-neg-3">
                  A tagline that explains the benefit of creating an account.
                </h1>

                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                  <h1 className="margin-bottom-1">Sign in to your account</h1>

                  <div className="usa-prose">
                    <p className="margin-top-1">
                      You can access your account by signing in with one of the
                      options below.
                    </p>
                  </div>

                  <p>
                    <Button type="button" outline={true} className="width-full">
                      Sign in with Login.gov
                    </Button>
                  </p>

                  <p>
                    <Button type="button" outline={true} className="width-full">
                      Sign in with Legacy system 1
                    </Button>
                  </p>

                  <p>
                    <Button type="button" outline={true} className="width-full">
                      Sign in with Legacy system 2
                    </Button>
                  </p>

                  <div className="border-top border-base-lighter margin-top-6 padding-top-1">
                    <p>
                      <strong>{"Don't have an account?"}</strong>
                    </p>

                    <p>
                      {"If you don't have an account already, sign up here:"}
                    </p>

                    <p>
                      <Button type="button" className="width-full">
                        Create Login.gov account
                      </Button>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid
                col={12}
                mobileLg={{ col: 10 }}
                tablet={{ col: 8 }}
                desktop={{ col: 6 }}
                className="padding-x-205">
                <div className="border-top border-base-lighter padding-top-4 desktop:border-0 desktop:padding-top-0">
                  <h2 className="display-none desktop:display-block">
                    A tagline that explains the benefit of creating an account.
                  </h2>

                  <div className="usa-prose">
                    <p>
                      Here’s space for a longer description to introduce 3-5
                      easily scannable bullet points. Note that on mobile, this
                      text block will bump below the Create Account form.
                    </p>
                    <section className="usa-graphic-list">
                      <div className="usa-graphic-list__row">
                        {Array.from(Array(3), (_, idx) => (
                          <div className="usa-media-block margin-y-2" key={idx}>
                            <img
                              className="usa-media-block__img height-7 width-7"
                              src={circleSvg}
                              alt="Alt text"
                            />
                            <div className="usa-media-block__body">
                              <p>
                                <strong>Value proposition {idx + 1}:</strong>{' '}
                                Vivamus nec velit sed leo scelerisque laoreet
                                vestibulum.
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

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

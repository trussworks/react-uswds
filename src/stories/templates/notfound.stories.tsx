/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { type JSX, useState } from 'react'
import logoImg from '@uswds/uswds/img/logo-img.png'
import circleSvg from '@uswds/uswds/img/circle-gray-20.svg'

import {
  GovBanner,
  GridContainer,
  Grid,
  ButtonGroup,
  Link,
  Button,
  Identifier,
  IdentifierMasthead,
  IdentifierLogos,
  IdentifierLogo,
  IdentifierIdentity,
  IdentifierLinks,
  IdentifierLinkItem,
  IdentifierLink,
  IdentifierGov,
  Header,
  Title,
  Search,
  Menu,
  NavMenuButton,
  NavDropDownButton,
  PrimaryNav,
  Address,
  Footer,
  FooterNav,
  Logo,
  SocialLink,
  SocialLinks,
} from '../../index'

export default {
  title: 'Page Templates/Not Found',
  parameters: {
    options: {
      showPanel: false,
    },
    docs: {
      description: {
        component: `
Page templates
`,
      },
    },
  },
}

export const NotFoundPage = (): JSX.Element => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [navDropdownOpen, setNavDropdownOpen] = useState([false, false])

  const handleToggleNavDropdown = (index: number): void => {
    setNavDropdownOpen((prevNavDropdownOpen) => {
      const newOpenState = Array(prevNavDropdownOpen.length).fill(false)
      // eslint-disable-next-line security/detect-object-injection
      newOpenState[index] = !prevNavDropdownOpen[index]
      return newOpenState
    })
  }

  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen)
  }

  const handleSearch = (): void => {
    return
  }

  const identifierLinksText = [
    'About <Parent shortname>',
    'Accessibility support',
    'FOIA requests',
    'No FEAR Act data',
    'Office of the Inspector General',
    'Performance reports',
    'Privacy policy',
  ]

  const primaryNavItems = [
    <React.Fragment key="primaryNav_0">
      <NavDropDownButton
        menuId="extended-nav-section-one"
        isOpen={navDropdownOpen[0]}
        label={'<Current section>'}
        onToggle={(): void => {
          handleToggleNavDropdown(0)
        }}
        isCurrent
      />
      <Menu
        id="extended-nav-section-one"
        items={new Array(8).fill(
          <a href="javascript:void(0);">{'<Navigation link>'}</a>
        )}
        isOpen={navDropdownOpen[0]}
      />
    </React.Fragment>,
    <React.Fragment key="primaryNav_1">
      <NavDropDownButton
        menuId="extended-nav-section-two"
        isOpen={navDropdownOpen[1]}
        label={'<Section>'}
        onToggle={(): void => {
          handleToggleNavDropdown(1)
        }}
      />
      <Menu
        id="extended-nav-section-two"
        items={new Array(3).fill(
          <a href="javascript:void(0);">
            {'< A very long navigation link that goes on two lines>'}
          </a>
        )}
        isOpen={navDropdownOpen[1]}
      />
    </React.Fragment>,
    <a key="primaryNav_2" className="usa-nav__link" href="javascript:void(0)">
      <span>{'<Simple link>'}</span>
    </a>,
  ]

  const returnToTop = (
    <GridContainer className="usa-footer__return-to-top">
      <a href="#">Return to top</a>
    </GridContainer>
  )

  const socialLinkItems = [
    <SocialLink key="facebook" name="Facebook" href="#" />,
    <SocialLink key="twitter" name="Twitter" href="#" />,
    <SocialLink key="youtube" name="YouTube" href="#" />,
    <SocialLink key="instagram" name="Instagram" href="#" />,
    <SocialLink key="rss" name="RSS" href="#" />,
  ]

  const footerPrimary = (
    <FooterNav
      aria-label="Footer navigation"
      size="medium"
      links={Array(5).fill(
        <a href="javascript:void(0)" className="usa-footer__primary-link">
          {'<Primary link>'}
        </a>
      )}
    />
  )

  const footerSecondary = (
    <>
      <Grid row gap>
        <Logo
          size="medium"
          image={<img className="usa-footer__logo-img" src={logoImg} alt="" />}
          heading={
            <p className="usa-footer__logo-heading">{'<Name of Agency>'}</p>
          }
        />
        <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
          <SocialLinks links={socialLinkItems} />
          <p className="usa-footer__contact-heading">
            {'<Agency Contact Center>'}
          </p>
          <Address
            size="medium"
            items={[
              <a key="telephone" href="javascript:void(0);">
                {'<(800) CALL-GOVT>'}
              </a>,
              <a key="email" href="javascript:void(0);">
                {'<info@agency.gov>'}
              </a>,
            ]}
          />
        </Grid>
      </Grid>
    </>
  )

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <GovBanner />
      <Header basic showMobileOverlay={mobileNavOpen}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title id="basic-logo">
              <a href="javascript:void(0);" title="Home" aria-label="Home">
                {'<Project title>'}
              </a>
            </Title>
            <NavMenuButton
              label="Menu"
              onClick={toggleMobileNav}
              className="usa-menu-btn"
            />
          </div>
          <PrimaryNav
            aria-label="Primary navigation"
            items={primaryNavItems}
            onToggleMobileNav={toggleMobileNav}
            mobileExpanded={mobileNavOpen}>
            <Search size="small" onSubmit={handleSearch} />
          </PrimaryNav>
        </div>
      </Header>

      <div className="usa-section">
        <GridContainer>
          <Grid row gap>
            <main
              className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs"
              id="main-content">
              <h1>Page not found</h1>

              <p className="usa-intro">
                We’re sorry, we can’t find the page you&apos;re looking for. It
                might have been removed, changed its name, or is otherwise
                unavailable.
              </p>

              <p>
                If you typed the URL directly, check your spelling and
                capitalization. Our URLs look like this:
                <strong>{' <agency.gov/example-one>'}</strong>.
              </p>

              <p>
                Visit our homepage for helpful tools and resources, or contact
                us and we’ll point you in the right direction.
              </p>

              <div className="margin-y-5">
                <ButtonGroup>
                  <Button type="button">Visit homepage</Button>
                  <Button type="button" outline>
                    Contact Us
                  </Button>
                </ButtonGroup>
              </div>

              <p>For immediate assistance:</p>

              <ul>
                <li>
                  <Link href="javascript:void()">
                    Start a live chat with us
                  </Link>
                </li>

                <li>
                  Call
                  <Link href="javascript:void()"> (555) 555-GOVT</Link>
                </li>
              </ul>

              <p className="text-base">
                <strong>Error code:</strong> 404
              </p>
            </main>
          </Grid>
        </GridContainer>
      </div>

      <Footer
        returnToTop={returnToTop}
        primary={footerPrimary}
        secondary={footerSecondary}
      />

      <Identifier>
        <IdentifierMasthead aria-label="Agency identifier">
          <IdentifierLogos>
            <IdentifierLogo href="javascript:void(0);">
              <img
                className="usa-identifier__logo-img"
                src={circleSvg}
                alt="<Parent agency> logo"
              />
            </IdentifierLogo>
          </IdentifierLogos>
          <IdentifierIdentity domain={'<domain.gov>'}>
            <span aria-hidden="true">An</span> official website of the{' '}
            <Link href="javascript:void(0);">{`<Parent agency>`}</Link>
          </IdentifierIdentity>
        </IdentifierMasthead>
        <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
          {identifierLinksText.map((text, idx) => (
            <IdentifierLinkItem key={idx}>
              <IdentifierLink href="javascript:void(0);">{text}</IdentifierLink>
            </IdentifierLinkItem>
          ))}
        </IdentifierLinks>
        <IdentifierGov aria-label="U.S. government information and services">
          <div className="usa-identifier__usagov-description">
            Looking for U.S. government information and services?
          </div>
          &nbsp;
          <Link href="javascript:void(0);" className="usa-link">
            Visit USA.gov
          </Link>
        </IdentifierGov>
      </Identifier>
    </>
  )
}

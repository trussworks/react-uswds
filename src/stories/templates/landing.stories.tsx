/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logoImg from 'uswds/src/img/logo-img.png'
import circleImg from 'uswds/src/img/circle-124.png'

import { GovBanner, GridContainer, Grid } from '../../index'

/** HEADER */
import { Header } from '../../components/header/Header/Header'
import { Title } from '../../components/header/Title/Title'
import { Search } from '../../components/header/../Search/Search'
import { Menu } from '../../components/header/Menu/Menu'
import { NavMenuButton } from '../../components/header/NavMenuButton/NavMenuButton'
import { NavDropDownButton } from '../../components/header/NavDropDownButton/NavDropDownButton'

import { ExtendedNav } from '../../components/header/ExtendedNav/ExtendedNav'

/** FOOTER */
import { Address } from '../../components/Footer/Address/Address'
import { Footer } from '../../components/Footer/Footer/Footer'
import { FooterNav } from '../../components/Footer/FooterNav/FooterNav'
import { Logo } from '../../components/Footer/Logo/Logo'
import { SocialLinks } from '../../components/Footer/SocialLinks/SocialLinks'

export default {
  title: 'Page Templates/Landing Page',
  parameters: {
    docs: {
      description: {
        component: `
Page templates
`,
      },
    },
  },
}

export const LandingPage = (): React.ReactElement => {
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
    /* */
  }

  const primaryNavItems = [
    <React.Fragment key="primaryNav_0">
      <NavDropDownButton
        menuId="extended-nav-section-one"
        isOpen={navDropdownOpen[0]}
        label="Current section"
        onToggle={(): void => {
          handleToggleNavDropdown(0)
        }}
        isCurrent
      />
      <Menu
        id="extended-nav-section-one"
        items={new Array(3).fill(<a href="#">Navigation link</a>)}
        isOpen={navDropdownOpen[0]}
      />
    </React.Fragment>,
    <React.Fragment key="primaryNav_1">
      <NavDropDownButton
        menuId="extended-nav-section-two"
        isOpen={navDropdownOpen[1]}
        label="Section"
        onToggle={(): void => {
          handleToggleNavDropdown(1)
        }}
      />
      <Menu
        id="extended-nav-section-two"
        items={new Array(3).fill(<a href="#">Navigation link</a>)}
        isOpen={navDropdownOpen[1]}
      />
    </React.Fragment>,
    <a key="primaryNav_2" className="usa-nav__link" href="javascript:void(0)">
      <span>Simple link</span>
    </a>,
  ]

  const secondaryNavItems = [
    <a key="secondaryNav_0" href="">
      Secondary link
    </a>,
    <a key="secondaryNav_1" href="">
      Another secondary link
    </a>,
  ]

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
        <a href="javascript:void(0)" className="usa-footer__primary-link">
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

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <GovBanner />
      <div className={`usa-overlay ${mobileNavOpen ? 'is-visible' : ''}`}></div>
      <Header extended>
        <div className="usa-navbar">
          <Title id="extended-logo">
            <a href="/" title="Home" aria-label="Home">
              Project title
            </a>
          </Title>
          <NavMenuButton
            label="Menu"
            onClick={toggleMobileNav}
            className="usa-menu-btn"
          />
        </div>
        <ExtendedNav
          aria-label="Primary navigation"
          primaryItems={primaryNavItems}
          secondaryItems={secondaryNavItems}
          onToggleMobileNav={toggleMobileNav}
          mobileExpanded={mobileNavOpen}>
          <Search size="small" onSubmit={handleSearch} />
        </ExtendedNav>
      </Header>

      <main id="main-content">
        <section className="usa-hero" aria-label="Introduction">
          <GridContainer>
            <div className="usa-hero__callout">
              <h1 className="usa-hero__heading">
                <span className="usa-hero__heading--alt">Hero callout:</span>
                Bring attention to a project priority
              </h1>
              <p>
                Support the callout with some short explanatory text. You don’t
                need more than a couple of sentences.
              </p>
              <a className="usa-button" href="javascript:void(0)">
                Call to action
              </a>
            </div>
          </GridContainer>
        </section>

        <section className="grid-container usa-section">
          <Grid row gap>
            <Grid tablet={{ col: 4 }}>
              <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
                A tagline highlights your approach
              </h2>
            </Grid>
            <Grid tablet={{ col: 8 }} className="usa-prose">
              <p>
                The tagline should inspire confidence and interest, focusing on
                the value that your overall approach offers to your audience.
                Use a heading typeface and keep your tagline to just a few
                words, and don’t confuse or mystify.
              </p>
              <p>
                Use the right side of the grid to explain the tagline a bit
                more. What are your goals? How do you do your work? Write in the
                present tense, and stay brief here. People who are interested
                can find details on internal pages.
              </p>
            </Grid>
          </Grid>
        </section>

        <section className="usa-graphic-list usa-section usa-section--dark">
          <GridContainer>
            <Grid row gap className="usa-graphic-list__row">
              <Grid tablet={{ col: true }} className="usa-media-block">
                <img
                  className="usa-media-block__img"
                  src={circleImg}
                  alt="Alt text"
                />
                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">
                    Graphic headings can vary.
                  </h2>
                  <p>
                    Graphic headings can be used a few different ways, depending
                    on what your landing page is for. Highlight your values,
                    specific program areas, or results.
                  </p>
                </div>
              </Grid>
              <Grid tablet={{ col: true }} className="usa-media-block">
                <img
                  className="usa-media-block__img"
                  src={circleImg}
                  alt="Alt text"
                />
                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">
                    Stick to 6 or fewer words.
                  </h2>
                  <p>
                    Keep body text to about 30 words. They can be shorter, but
                    try to be somewhat balanced across all four. It creates a
                    clean appearance with good spacing.
                  </p>
                </div>
              </Grid>
            </Grid>
            <Grid row gap className="usa-graphic-list__row">
              <Grid tablet={{ col: true }} className="usa-media-block">
                <img
                  className="usa-media-block__img"
                  src={circleImg}
                  alt="Alt text"
                />
                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">
                    Never highlight anything without a goal.
                  </h2>
                  <p>
                    For anything you want to highlight here, understand what
                    your users know now, and what activity or impression you
                    want from them after they see it.
                  </p>
                </div>
              </Grid>
              <Grid tablet={{ col: true }} className="usa-media-block">
                <img
                  className="usa-media-block__img"
                  src={circleImg}
                  alt="Alt text"
                />
                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">
                    Could also have 2 or 6.
                  </h2>
                  <p>
                    In addition to your goal, find out your users’ goals. What
                    do they want to know or do that supports your mission? Use
                    these headings to show these.
                  </p>
                </div>
              </Grid>
            </Grid>
          </GridContainer>
        </section>

        <section id="test-section-id" className="usa-section">
          <GridContainer>
            <h2 className="font-heading-xl margin-y-0">Section heading</h2>
            <p className="usa-intro">
              Everything up to this point should help people understand your
              agency or project: who you are, your goal or mission, and how you
              approach it. Use this section to encourage them to act. Describe
              why they should get in touch here, and use an active verb on the
              button below. “Get in touch,” “Learn more,” and so on.
            </p>
            <a href="#" className="usa-button usa-button--big">
              Call to action
            </a>
          </GridContainer>
        </section>
      </main>

      <Footer
        returnToTop={returnToTop}
        primary={footerPrimary}
        secondary={footerSecondary}
      />
    </>
  )
}

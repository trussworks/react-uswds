/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logoImg from 'uswds/src/img/logo-img.png'

import { GovBanner, GridContainer, Grid } from '../../index'

/** HEADER */
import { Header } from '../../components/header/Header/Header'
import { Title } from '../../components/header/Title/Title'
import { Search } from '../../components/header/../Search/Search'
import { Menu } from '../../components/header/Menu/Menu'
import { NavMenuButton } from '../../components/header/NavMenuButton/NavMenuButton'
import { NavDropDownButton } from '../../components/header/NavDropDownButton/NavDropDownButton'
import { PrimaryNav } from '../../components/header/PrimaryNav/PrimaryNav'

/** FOOTER */
import { Address } from '../../components/Footer/Address/Address'
import { Footer } from '../../components/Footer/Footer/Footer'
import { FooterNav } from '../../components/Footer/FooterNav/FooterNav'
import { Logo } from '../../components/Footer/Logo/Logo'
import { SocialLinks } from '../../components/Footer/SocialLinks/SocialLinks'

import { SideNav } from '../../components/SideNav/SideNav'

export default {
  title: 'Page Templates/Documentation Page',
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

export const DocumentationPage = (): React.ReactElement => {
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

  const sideNavItems = [
    <a key="sidenav_0" href="">
      Parent link
    </a>,
    <React.Fragment key="sidenav_1">
      <a href="" className="usa-current">
        Current page
      </a>
      <SideNav
        isSubnav
        items={[
          ...Array(1).fill(<a href="">Child link</a>),
          <React.Fragment key="sidenav_1_1">
            <a href="" className="usa-current">
              Child link
            </a>
            <SideNav
              isSubnav
              items={[
                ...Array(2).fill(<a href="">Grandchild link</a>),
                <a href="" key="sidenav_1_2" className="usa-current">
                  Grandchild link
                </a>,
                <a href="" key="sidenav_1_3">
                  Grandchild link
                </a>,
              ]}
            />
          </React.Fragment>,
          ...Array(3).fill(<a href="">Child link</a>),
        ]}
      />
    </React.Fragment>,
    <a key="sidenav_2" href="">
      Parent link
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
      <Header basic>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title id="basic-logo">
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
            <Grid className="usa-layout-docs__sidenav" desktop={{ col: 3 }}>
              <nav aria-label="Secondary navigation">
                <SideNav items={sideNavItems} />
              </nav>
            </Grid>
            <main
              className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs"
              id="main-content">
              <h1>Page heading (h1)</h1>

              <p className="usa-intro">
                The page heading communicates the main focus of the page. Make
                your page heading descriptive and keep it succinct.
              </p>
              <h2 id="section-heading-h2">Section heading (h2)</h2>

              <p>
                These headings introduce, respectively, sections and subsections
                within your body copy. As you create these headings, follow the
                same guidelines that you use when writing section headings: Be
                succinct, descriptive, and precise.
              </p>

              <h3 id="section-heading-h3">Subsection heading (h3)</h3>

              <p>
                The particulars of your body copy will be determined by the
                topic of your page. Regardless of topic, it’s a good practice to
                follow the inverted pyramid structure when writing copy: Begin
                with the information that’s most important to your users and
                then present information of less importance.
              </p>

              <p>
                Keep each section and subsection focused - a good approach is to
                include one theme (topic) per section.
              </p>

              <h4 id="section-heading-h4">Subsection heading (h4)</h4>

              <p>
                Use the side navigation menu to help your users quickly skip to
                different sections of your page. The menu is best suited to
                displaying a hierarchy with one to three levels and, as we
                mentioned, to display the sub-navigation of a given page.
              </p>

              <p>
                Read the full documentatino on our side navigation on the
                component page.
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
    </>
  )
}

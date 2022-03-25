import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes as RouterRoutes,
  Route,
  NavLink,
  Link,
} from 'react-router-dom'

import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import {
  GovBanner,
  Header,
  Title,
  NavMenuButton,
  PrimaryNav,
  GridContainer,
} from '@trussworks/react-uswds'

import HomePage from './pages/Home'
import ExamplePage from './pages/Example'
import FormsPage from './pages/Forms'
import IconsPage from './pages/Icons'
import { Routes } from './routes'

import './App.css'

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { HOME_PAGE, EXAMPLES_PAGE, FORMS_PAGE, ICONS_PAGE } = Routes

  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen)
  }

  const navItems = [
    <NavLink to={HOME_PAGE} className={(isActive) => isActive && "usa-current"} end>
      Home
    </NavLink>,
    <NavLink to={EXAMPLES_PAGE} className={(isActive) => isActive && "usa-current"}>
      Examples
    </NavLink>,
    <NavLink to={ICONS_PAGE} className={(isActive) => isActive && "usa-current"}>
      Icons
    </NavLink>,
  ]

  return (
    <Router>
      <GovBanner />
      <Header basic>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>
              <Link to={HOME_PAGE}>Example Application</Link>
            </Title>
            <NavMenuButton
              label="Menu"
              onClick={toggleMobileNav}
              className="usa-menu-btn"
            />
          </div>

          <PrimaryNav
            aria-label="Primary navigation"
            items={navItems}
            onToggleMobileNav={toggleMobileNav}
            mobileExpanded={mobileNavOpen}
          />
        </div>
      </Header>

      <section className="usa-section">
        <GridContainer>
          <RouterRoutes>
            <Route path={EXAMPLES_PAGE} element={<ExamplePage />} />
            <Route path={ICONS_PAGE} element={<IconsPage />} />
            <Route path={FORMS_PAGE} element={<FormsPage />} />
            <Route path={HOME_PAGE} element={<HomePage />} />
          </RouterRoutes>
        </GridContainer>
      </section>
    </Router>
  )
}

export default App

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from 'react-router-dom'

import '@trussworks/react-uswds/lib/uswds.css'
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

import './App.css'

/* Routes */
const routes = {
  HOME_PAGE: '/',
  EXAMPLES_PAGE: '/examples',
}

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { HOME_PAGE, EXAMPLES_PAGE } = routes

  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen)
  }

  const navItems = [
    <NavLink to={HOME_PAGE} activeClassName="usa-current" exact>
      Home
    </NavLink>,
    <NavLink to={EXAMPLES_PAGE} activeClassName="usa-current">
      Examples
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
          <Switch>
            <Route path={EXAMPLES_PAGE}>
              <ExamplePage />
            </Route>
            <Route path={HOME_PAGE}>
              <HomePage />
            </Route>
          </Switch>
        </GridContainer>
      </section>
    </Router>
  )
}

export default App

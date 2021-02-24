import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
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
    <NavLink to={HOME_PAGE} activeClassName="usa-current" exact>
      Home
    </NavLink>,
    <NavLink to={EXAMPLES_PAGE} activeClassName="usa-current">
      Examples
    </NavLink>,
    <NavLink to={ICONS_PAGE} activeClassName="usa-current">
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
          <Switch>
            <Route path={EXAMPLES_PAGE}>
              <ExamplePage />
            </Route>
            <Route path={ICONS_PAGE}>
              <IconsPage />
            </Route>
            <Route path={FORMS_PAGE}>
              <FormsPage />
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

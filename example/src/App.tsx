import React from 'react'
import { useRoutes, A } from 'hookrouter'

import '@trussworks/react-uswds/lib/uswds.css'
import {
  GovBanner,
  Header,
  Title,
  SideNav,
  GridContainer,
  Grid,
} from '@trussworks/react-uswds'

import HomePage from './pages/Home'
import TestPage from './pages/Test'

import './App.css'

/* Route component definitions */
const routes = {
  '/': () => <HomePage />,
  '/test': () => <TestPage />,
}

const App = () => {
  const routeResult = useRoutes(routes)
  const navItems = [<A href="/">Home</A>, <A href="/test">Test</A>]

  return (
    <div className="App">
      <GovBanner />
      <Header basic>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>ReactUSWDS Example Application</Title>
          </div>
        </div>
      </Header>
      <GridContainer>
        <Grid row gap>
          <Grid tablet={{ col: 3 }}>
            <SideNav items={navItems} />
          </Grid>
          <Grid col>{routeResult}</Grid>
        </Grid>
      </GridContainer>
    </div>
  )
}

export default App

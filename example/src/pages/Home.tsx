import React from 'react'
import { Link } from 'react-router-dom'
import { Link as USWDSLink } from '@trussworks/react-uswds'

const HomePage = (): React.ReactElement => (
  <main>
    <h1>ReactUSWDS Example App</h1>

    <p className="usa-intro">
      This is an example application that can be used to demonstrate and test
      ReactUSWDS functionality. Here's a{' '}
      <USWDSLink to="/examples" asCustom={Link}>
        link to the examples page!
      </USWDSLink>
    </p>
  </main>
)

export default HomePage

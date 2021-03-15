import React from 'react'
import { Link } from 'react-router-dom'
import { Link as USWDSLink } from '@trussworks/react-uswds'

const ExamplePage = (): React.ReactElement => (
  <section>
    <h1>Examples</h1>

    <p className="usa-intro">Example usage of react-uswds in real life!</p>

    <ul className="usa-list">
      <li>
        <USWDSLink
          to="/forms"
          asCustom={Link}
          variant="external"
          target="_blank">
          Forms
        </USWDSLink>
      </li>
      <li>
        <USWDSLink
          to="/icons"
          asCustom={Link}
          variant="external"
          target="_blank">
          Icons
        </USWDSLink>
      </li>
    </ul>
  </section>
)

export default ExamplePage

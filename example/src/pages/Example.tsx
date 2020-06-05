import React from 'react'

const ExamplePage = (): React.ReactElement => (
  <section>
    <h1>Examples</h1>

    <p className="usa-intro">
      Right now there are no examples! Things that we could add include...
    </p>

    <ul className="usa-list">
      <li>Modals</li>
      <li>
        Form libraries
        <ul className="usa-list">
          <li>Formik</li>
          <li>React-hook-form</li>
        </ul>
      </li>
    </ul>
  </section>
)

export default ExamplePage

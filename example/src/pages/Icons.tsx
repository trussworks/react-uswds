
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const IconsPage = (): React.ReactElement => (
  <section>
    <h1>Icons</h1>

    <p className="usa-intro">
      We recommend using icons from <a href="https://github.com/FortAwesome/react-fontawesome">react-fontawesome</a> for projects that need icons.
    </p>

    <FontAwesomeIcon icon={faUpload} /> Upload Image

  </section>
)

export default IconsPage

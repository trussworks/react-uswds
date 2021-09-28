import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import {
  IconAccessibilityNew,
  IconAccessibleForward,
} from '@trussworks/react-uswds'

const IconsPage = (): React.ReactElement => (
  <section>
    <h1>Icons</h1>
    <p className="usa-intro">
      We recommend using icons from{' '}
      <a href="https://github.com/FortAwesome/react-fontawesome">
        react-fontawesome
      </a>{' '}
      for projects that need icons.
    </p>
    <FontAwesomeIcon icon={faUpload} /> Upload Image
    <IconAccessibilityNew size={4} focusable={false} />
    <IconAccessibleForward size={9} />
  </section>
)

export default IconsPage

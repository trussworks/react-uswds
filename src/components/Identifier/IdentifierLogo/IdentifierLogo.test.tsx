import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLogo } from './IdentifierLogo'

describe('IdentifierLogo component', () => {
  it('renders without errors', () => {
    /*
    https://testing-library.com/docs/queries/byrole/
    https://www.tpgi.com/what-is-an-accessible-name/
    
    When an image is the only content of a link, the image’s
    alt attribute gives the link its accessible name.
    */
  })

  it('renders multiple logos', () => {
    /*
    do I test this here or in Identifier.stories ?
    depends if IdentifierLogo should handle multiple logos
    or if that's managed by IdentifierMasthead
    */
  })
})

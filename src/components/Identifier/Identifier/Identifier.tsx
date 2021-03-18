import React from 'react'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

const links = [
  <a key="identifierLinkGoogle" href="www.google.com">
    Google
  </a>,
  <a key="identifierLinkOrWhatever" href="www.google.com">
    google but with a small g
  </a>,
]

/* footer's primary section has the FooterNav and the Address components
   footer's secondary section has the Logo */

export const Identifier = (): React.ReactElement => {
  return (
    <div data-testid="identifier">
      Identifier component
      <IdentifierMasthead />
      <IdentifierLinks links={links} />
      <IdentifierGov />
    </div>
  )
}

export default Identifier

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

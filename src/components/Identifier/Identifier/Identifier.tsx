import React from 'react'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

export const Identifier = (): React.ReactElement => {
  return (
    <div data-testid="identifier">
      Identifier component
      <IdentifierMasthead />
      <IdentifierLinks />
      <IdentifierGov />
    </div>
  )
}

export default Identifier

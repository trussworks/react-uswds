import React from 'react'
import { render } from '@testing-library/react'

import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

const links = [
  <a key="identifierLinkGoogle" href="www.google.com">
    identifierLinkGoogle
  </a>,
  <a key="identifierLinkGoogleAgain" href="www.google.com">
    identifierLinkGoogleAgain
  </a>,
]

const identifierMastheadProps = {
  plaintextDomain: 'aGovDomain.gov',
  parentAgencyUrl: 'https://www.parentAgencyExampleUrl.gov/',
  parentAgencyName: 'Test Parent Agency Name',
}

describe('Identifier component', () => {
  it('renders', () => {
    const { queryByTestId } = render(
      <Identifier>
        <IdentifierMasthead {...identifierMastheadProps} />
        <IdentifierLinks links={links} />
        <IdentifierGov />
      </Identifier>
    )
    expect(queryByTestId('identifier')).toBeInTheDocument()
  })
})

/*
what tests need to be added?
- “Identifier renders without errors”
- “Identifier renders Spanish v?”

Storybook examples
- default
- default (spanish)
- multiple parents and logos
- multiple parents and logos (spanish)
- no logos
- taxpayer disclaimer
- taxpayer disclaimer (spanish)
*/

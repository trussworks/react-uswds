import React from 'react'
import { render } from '@testing-library/react'

import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

const links = [
  <a key="identifierLinkGoogle" href="www.google.com">
    identifierLinkGoogle
  </a>,
  <a key="identifierLinkGoogleAgain" href="www.google.com">
    identifierLinkGoogleAgain
  </a>,
]

const testParentAgency = {
  url: 'https://www.parentAgencyExampleUrl.gov/',
  name: 'Test Parent Agency Name',
  logo: dotGovIcon,
}

describe('Identifier component', () => {
  it('renders', () => {
    const { queryByTestId } = render(
      <Identifier>
        <IdentifierMasthead
          domain="domain.gov.mil.edu"
          parentAgencies={[testParentAgency]}
        />
        <IdentifierLinks>{links}</IdentifierLinks>
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

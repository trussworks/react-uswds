import React from 'react'
import { render } from '@testing-library/react'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

import { IdentifierMasthead } from './IdentifierMasthead'
import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'

const testAgency = {
  url: '#',
  name: 'Test Agency Name',
  logo: dotGovIcon,
}

describe('IdentifierMasthead component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead>
        <IdentifierLogo
          agencyUrl={testAgency.url}
          agencyName={testAgency.name}
          src={testAgency.logo}
        />
      </IdentifierMasthead>
    )
    expect(queryByTestId('identifierMasthead')).toBeInTheDocument()
  })

  it('renders section attributes passed in by props', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead aria-label="custom aria-label value">
        <IdentifierLogo
          agencyUrl={testAgency.url}
          agencyName={testAgency.name}
          src={testAgency.logo}
        />
      </IdentifierMasthead>
    )
    expect(queryByTestId('identifierMasthead')).toHaveAttribute(
      'aria-label',
      'custom aria-label value'
    )
  })

  it('renders with a custom className passed in', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead className="usa-identifier__custom-class-name">
        <IdentifierLogo
          agencyUrl={testAgency.url}
          agencyName={testAgency.name}
          src={testAgency.logo}
        />
      </IdentifierMasthead>
    )
    expect(queryByTestId('identifierMasthead')).toHaveClass(
      'usa-identifier__section usa-identifier__section--masthead usa-identifier__custom-class-name'
    )
  })

  it('renders with a logo passed in', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead>
        <IdentifierLogo
          agencyUrl={testAgency.url}
          agencyName={testAgency.name}
          src={testAgency.logo}
        />
      </IdentifierMasthead>
    )
    expect(queryByTestId('identifierMasthead-logo')).toBeInTheDocument
  })

  it('renders without a logo passed in', () => {
    const { queryByTestId } = render(<IdentifierMasthead />)
    expect(queryByTestId('identifierMasthead-logo')).not.toBeInTheDocument()
  })
})

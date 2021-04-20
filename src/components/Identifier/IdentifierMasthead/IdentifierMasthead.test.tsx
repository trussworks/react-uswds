import React from 'react'
import { render } from '@testing-library/react'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

import { IdentifierMasthead } from './IdentifierMasthead'
import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'
import { IdentifierLogos } from '../IdentifierLogos/IdentifierLogos'
import { IdentifierIdentity } from '../IdentifierIdentity/IdentifierIdentity'
import { Link } from '../../Link/Link'

const testIdentifierLogo = [
  <img
    key="three"
    src={dotGovIcon}
    className="usa-identifier__logo-img"
    alt="Test Agency Name logo"
  />,
]

const testIdentifierLogoSpanish = [
  <img
    key="four"
    src={dotGovIcon}
    className="usa-identifier__logo-img"
    alt="Logo de Test Agency Name"
  />,
]

describe('IdentifierMasthead component', () => {
  it('renders without errors', () => {
    const { getAllByRole, queryByTestId } = render(
      <IdentifierMasthead
        className="usa-identifier__custom-class-name"
        aria-label="Agency identifier">
        <IdentifierLogos>
          <IdentifierLogo href="#" className="custom-class-name">
            {testIdentifierLogo}
          </IdentifierLogo>
        </IdentifierLogos>
        <IdentifierIdentity domain="domain.edu.mil.gov">
          {`An official website of the `}
          <Link href="#">Test Agency Name</Link>
        </IdentifierIdentity>
      </IdentifierMasthead>
    )

    expect(queryByTestId('identifierMasthead-logo')).toBeInTheDocument
    expect(getAllByRole('link')).toHaveLength(2)
    expect(queryByTestId('identifierMasthead')).toBeInTheDocument()
    expect(queryByTestId('identifierMasthead')).toHaveClass(
      'usa-identifier__section usa-identifier__section--masthead usa-identifier__custom-class-name'
    )
  })

  it('renders in Spanish', () => {
    const { queryByAltText } = render(
      <IdentifierMasthead>{testIdentifierLogoSpanish}</IdentifierMasthead>
    )
    expect(queryByAltText('Logo de Test Agency Name')).toBeInTheDocument()
  })

  it('renders without a logo passed in', () => {
    const { queryByTestId } = render(<IdentifierMasthead />)
    expect(queryByTestId('identifierMasthead-logo')).not.toBeInTheDocument()
  })

  it('renders with more than two logos passed in', () => {
    const { getAllByRole, queryByText } = render(
      <IdentifierMasthead aria-label="Agency identifier">
        <IdentifierLogos>
          <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
          <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
          <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
        </IdentifierLogos>
        <IdentifierIdentity domain="domain.edu.mil.gov">
          {`An official website of the `}
          <Link href="#">Test Agency Name</Link>
          {`, `}
          <Link href="#">Second Test Agency Name</Link>
          {`, and the `}
          <Link href="#">Third Test Agency Name</Link>
        </IdentifierIdentity>
      </IdentifierMasthead>
    )
    expect(getAllByRole('img')).toHaveLength(3)
    expect(getAllByRole('link')).toHaveLength(6)
    expect(queryByText('Third Test Agency Name')).toBeInTheDocument()
  })
})

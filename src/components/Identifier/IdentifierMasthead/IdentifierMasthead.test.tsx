import React from 'react'
import { render } from '@testing-library/react'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

import { IdentifierMasthead } from './IdentifierMasthead'
import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'

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
        <div className="usa-identifier__logos">
          <IdentifierLogo href="#" className="custom-class-name">
            {testIdentifierLogo}
          </IdentifierLogo>
        </div>
        <div
          className="usa-identifier__identity"
          aria-label="Agency description">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`An official website of the `}
            <a href="testlink">Test Agency Name</a>
          </p>
        </div>
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
        <div className="usa-identifier__logos">
          <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
          <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
          <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
        </div>
        <div aria-label="Agency description">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`An official website of the `}
            <a href="testlink">Test Agency Name</a>
            {`, `}
            <a href="secondTestLink">Second Test Agency Name</a>
            {`, and the `}
            <a href="thirdTestLink">Third Test Agency Name</a>
          </p>
        </div>
      </IdentifierMasthead>
    )
    expect(getAllByRole('img')).toHaveLength(3)
    expect(getAllByRole('link')).toHaveLength(6)
    expect(queryByText('Third Test Agency Name')).toBeInTheDocument()
  })
})

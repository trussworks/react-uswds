import React from 'react'
import { render } from '@testing-library/react'

import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

const testIdentifierLogo = (
  <img
    src={dotGovIcon}
    className="usa-identifier__logo-img"
    alt="Test Agency Name logo"
  />
)

const testIdentifierLogoSpanish = (
  <img
    src={dotGovIcon}
    className="usa-identifier__logo-img"
    alt="Logo de Test Agency Name"
  />
)

const testLinks = [
  <IdentifierLinkItem key="one">
    <IdentifierLink href="#">About &lt;Parent shortname&gt;</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="two">
    <IdentifierLink href="#">Accessibility support</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="three">
    <IdentifierLink href="#">FOIA requests</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="four">
    <IdentifierLink href="#">No FEAR Act data</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="five">
    <IdentifierLink href="#">Office of the Inspector General</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="six">
    <IdentifierLink href="#">Performance reports</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="seven">
    <IdentifierLink href="#">Privacy policy</IdentifierLink>
  </IdentifierLinkItem>,
]

const testLinksSpanish = [
  <IdentifierLinkItem key="one">
    <IdentifierLink href="#">Acerca de &lt;Parent shortname&gt;</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="two">
    <IdentifierLink href="#">Soporte de accesibilidad</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="three">
    <IdentifierLink href="#">Solicitud a través de FOIA</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="four">
    <IdentifierLink href="#">Datos de la ley No FEAR</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="five">
    <IdentifierLink href="#">Oficina del Inspector General</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="six">
    <IdentifierLink href="#">Informes de desempeño</IdentifierLink>
  </IdentifierLinkItem>,
  <IdentifierLinkItem key="seven">
    <IdentifierLink href="#">Política de privacidad</IdentifierLink>
  </IdentifierLinkItem>,
]

const testIdentifierGovContent = [
  <>
    <div
      data-testid="identifierGov-description"
      className="usa-identifier__usagov-description">
      Looking for U.S. government information and services?
    </div>
    &nbsp;
    <a
      data-testid="identifierGov-link"
      href="https://www.usa.gov/"
      className="usa-link">
      Visit USA.gov
    </a>
  </>,
]

const testIdentifierGovContentSpanish = [
  <>
    <div
      data-testid="identifierGov-description"
      className="usa-identifier__usagov-description">
      ¿Necesita información y servicios del Gobierno?
    </div>
    &nbsp;
    <a
      data-testid="identifierGov-link"
      href="https://www.usa.gov/espanol/"
      className="usa-link">
      Visite USAGov en Español
    </a>
  </>,
]

describe('Identifier component', () => {
  it('renders without errors', () => {
    const { getByRole, getAllByRole, queryByTestId } = render(
      <Identifier>
        <IdentifierMasthead aria-label="Agency identifier">
          <div className="usa-identifier__logos">
            <IdentifierLogo href="#" className="custom-class-name">
              {testIdentifierLogo}
            </IdentifierLogo>

            <div
              data-testid="identifierMasthead-agency-description"
              className="usa-identifier__identity"
              aria-label="Agency description">
              <p className="usa-identifier__identity-domain">
                domain.edu.mil.gov
              </p>
              <p className="usa-identifier__identity-disclaimer">
                {`An official website of the `}
                <a href="testlink">Test Agency Name</a>
              </p>
            </div>
          </div>
        </IdentifierMasthead>
        <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
          {testLinks}
        </IdentifierLinks>
        <IdentifierGov aria-label="U.S. government information and services">
          {testIdentifierGovContent}
        </IdentifierGov>
      </Identifier>
    )

    expect(queryByTestId('identifier')).toBeInTheDocument()
    expect(queryByTestId('identifierMasthead')).toBeInTheDocument()
    expect(queryByTestId('identifierGov')).toBeInTheDocument()
    expect(getAllByRole('link')).toHaveLength(10)
    expect(getByRole('navigation')).toBeInTheDocument()
  })

  it('renders in Spanish', () => {
    const { getAllByRole, queryByText } = render(
      <Identifier>
        <IdentifierMasthead aria-label="Identificador de la agencia">
          <div className="usa-identifier__logos">
            <IdentifierLogo href="#">
              {testIdentifierLogoSpanish}
            </IdentifierLogo>

            <div
              data-testid="identifierMasthead-agency-description"
              className="usa-identifier__identity"
              aria-label="Descripción de la agencia">
              <p className="usa-identifier__identity-domain">
                domain.edu.mil.gov
              </p>
              <p className="usa-identifier__identity-disclaimer">
                {`Un sitio web oficial de `}
                <a href="testlink">Test Agency Name Spanish</a>
              </p>
            </div>
          </div>
        </IdentifierMasthead>
        <IdentifierLinks navProps={{ 'aria-label': 'Enlaces importantes' }}>
          {testLinksSpanish}
        </IdentifierLinks>
        <IdentifierGov aria-label="Información y servicios del Gobierno de EE. UU.">
          {testIdentifierGovContentSpanish}
        </IdentifierGov>
      </Identifier>
    )

    expect(queryByText('Un sitio web oficial de')).toBeInTheDocument()
    expect(queryByText('Visite USAGov en Español')).toBeInTheDocument()
    expect(getAllByRole('link')).toHaveLength(10)
  })

  it('renders without logos', () => {
    const { getAllByRole, getByTestId, queryByText } = render(
      <Identifier>
        <IdentifierMasthead aria-label="Agency identifier">
          <div
            data-testid="identifierMasthead-agency-description"
            className="usa-identifier__identity"
            aria-label="Agency description">
            <p className="usa-identifier__identity-domain">
              domain.edu.mil.gov
            </p>
            <p className="usa-identifier__identity-disclaimer">
              {`An official website of the `}
              <a href="testlink">Test Agency Name</a>
            </p>
          </div>
        </IdentifierMasthead>
        <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
          {testLinks}
        </IdentifierLinks>
        <IdentifierGov aria-label="U.S. government information and services">
          {testIdentifierGovContent}
        </IdentifierGov>
      </Identifier>
    )

    expect(getByTestId('identifierMasthead-agency-description')).not.toContain(
      'img'
    )
    expect(getAllByRole('link')).toHaveLength(9)
    expect(queryByText('Privacy policy')).toBeInTheDocument()
  })

  it('renders more than two parent agencies', () => {
    const { getAllByRole, queryByText } = render(
      <Identifier>
        <IdentifierMasthead aria-label="Agency identifier">
          <div className="usa-identifier__logos">
            <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
            <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
            <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
          </div>
          <div
            data-testid="identifierMasthead-agency-description"
            className="usa-identifier__identity"
            aria-label="Agency description">
            <p className="usa-identifier__identity-domain">
              domain.edu.mil.gov
            </p>
            <p className="usa-identifier__identity-disclaimer">
              {`An official website of the `}
              <a href="testlink">Test Agency Name</a>
              {`, `}
              <a href="secondTestLink">Second Test Agency Name</a>
              {`, and the `}
              <a href="ThirdTestLink">Third Test Agency Name</a>
            </p>
          </div>
        </IdentifierMasthead>
        <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
          {testLinks}
        </IdentifierLinks>
        <IdentifierGov aria-label="U.S. government information and services">
          {testIdentifierGovContent}
        </IdentifierGov>
      </Identifier>
    )

    expect(getAllByRole('img')).toHaveLength(3)
    expect(getAllByRole('link')).toHaveLength(14)
    expect(queryByText('Third Test Agency Name')).toBeInTheDocument()
  })

  it('renders tax disclaimer', () => {
    const { getByTestId } = render(
      <Identifier>
        <IdentifierMasthead aria-label="Agency identifier">
          <div className="usa-identifier__logos">
            <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
          </div>
          <div
            data-testid="identifierMasthead-agency-description"
            className="usa-identifier__identity"
            aria-label="Agency description">
            <p className="usa-identifier__identity-domain">
              domain.edu.mil.gov
            </p>
            <p className="usa-identifier__identity-disclaimer">
              {`An official website of the `}
              <a href="testlink">Test Agency Name</a>
              {`. Produced and published at taxpayer expense.`}
            </p>
          </div>
        </IdentifierMasthead>
        <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
          {testLinks}
        </IdentifierLinks>
        <IdentifierGov aria-label="U.S. government information and services">
          {testIdentifierGovContent}
        </IdentifierGov>
      </Identifier>
    )

    expect(
      getByTestId('identifierMasthead-agency-description')
    ).toHaveTextContent('Produced and published at taxpayer expense.')
  })
})

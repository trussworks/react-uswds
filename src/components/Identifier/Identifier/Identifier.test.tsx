import React from 'react'
import { render } from '@testing-library/react'

import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLogos } from '../IdentifierLogos/IdentifierLogos'
import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'
import { IdentifierIdentity } from '../IdentifierIdentity/IdentifierIdentity'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'
import { Link } from '../../Link/Link'

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

const testLinks = (
  <>
    <IdentifierLinkItem key="one">
      <IdentifierLink href="#">About &lt;Parent shortname&gt;</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="two">
      <IdentifierLink href="#">Accessibility support</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="three">
      <IdentifierLink href="#">FOIA requests</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="four">
      <IdentifierLink href="#">No FEAR Act data</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="five">
      <IdentifierLink href="#">Office of the Inspector General</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="six">
      <IdentifierLink href="#">Performance reports</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="seven">
      <IdentifierLink href="#">Privacy policy</IdentifierLink>
    </IdentifierLinkItem>
  </>
)

const testLinksSpanish = (
  <>
    <IdentifierLinkItem key="one">
      <IdentifierLink href="#">
        Acerca de &lt;Parent shortname&gt;
      </IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="two">
      <IdentifierLink href="#">Soporte de accesibilidad</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="three">
      <IdentifierLink href="#">Solicitud a través de FOIA</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="four">
      <IdentifierLink href="#">Datos de la ley No FEAR</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="five">
      <IdentifierLink href="#">Oficina del Inspector General</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="six">
      <IdentifierLink href="#">Informes de desempeño</IdentifierLink>
    </IdentifierLinkItem>
    <IdentifierLinkItem key="seven">
      <IdentifierLink href="#">Política de privacidad</IdentifierLink>
    </IdentifierLinkItem>
  </>
)

const testIdentifierGovContent = (
  <>
    <div className="usa-identifier__usagov-description">
      Looking for U.S. government information and services?
    </div>
    &nbsp;
    <Link href="https://www.usa.gov/" className="usa-link">
      Visit USA.gov
    </Link>
  </>
)

const testIdentifierGovContentSpanish = (
  <>
    <div className="usa-identifier__usagov-description">
      ¿Necesita información y servicios del Gobierno?
    </div>
    &nbsp;
    <Link href="https://www.usa.gov/espanol/" className="usa-link">
      Visite USAGov en Español
    </Link>
  </>
)

describe('Identifier component', () => {
  it('renders without errors', () => {
    const { getByRole, getAllByRole, queryByTestId } = render(
      <Identifier>
        <IdentifierMasthead aria-label="Agency identifier">
          <IdentifierLogos>
            <IdentifierLogo href="#" className="custom-class-name">
              {testIdentifierLogo}
            </IdentifierLogo>
          </IdentifierLogos>
          <IdentifierIdentity domain="domain.edu.mil.gov">
            {`An official website of the `}
            <Link href="testlink">Test Agency Name</Link>
          </IdentifierIdentity>
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
          <IdentifierLogos>
            <IdentifierLogo href="#">
              {testIdentifierLogoSpanish}
            </IdentifierLogo>
          </IdentifierLogos>
          <IdentifierIdentity domain="domain.edu.mil.gov">
            {`Un sitio web oficial de `}
            <Link href="testlink">Test Agency Name Spanish</Link>
          </IdentifierIdentity>
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
          <IdentifierIdentity
            data-testid="identifierMasthead-agency-description"
            domain="domain.edu.mil.gov"
            aria-label="Agency description">
            {`An official website of the `}
            <Link href="testlink">Test Agency Name</Link>
          </IdentifierIdentity>
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
          <IdentifierLogos>
            <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
          </IdentifierLogos>
          <IdentifierIdentity
            data-testid="identifierMasthead-agency-description"
            domain="domain.edu.mil.gov">
            {`An official website of the `}
            <Link href="#">Test Agency Name</Link>
            {`. Produced and published at taxpayer expense.`}
          </IdentifierIdentity>
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

/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierIdentity } from '../IdentifierIdentity/IdentifierIdentity'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'
import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'
import { IdentifierLogos } from '../IdentifierLogos/IdentifierLogos'

import { Link } from '../../Link/Link'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

export default {
  title: 'Components/Identifier',
  component: Identifier,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Identifier component
        
Source: https://designsystem.digital.gov/components/identifier/
`,
      },
    },
  },
}

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

export const identifierDefault = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <IdentifierLogos>
        <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
      </IdentifierLogos>
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {`An official website of the `}
        <Link href="#">Test Agency Name</Link>
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

export const identifierSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <IdentifierLogos>
        <IdentifierLogo href="#">{testIdentifierLogoSpanish}</IdentifierLogo>
      </IdentifierLogos>
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {`Un sitio web oficial de `}
        <Link href="#">Test Agency Name Spanish</Link>
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

export const multipleParentsAndLogos = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <IdentifierLogos>
        <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
        <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
      </IdentifierLogos>
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {`An official website of the `}
        <Link href="#">Test Agency Name</Link>
        {` and the `}
        <Link href="#">Other Test Agency Name</Link>
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

export const multipleParentsAndLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <IdentifierLogos>
        <IdentifierLogo href="#">{testIdentifierLogoSpanish}</IdentifierLogo>
        <IdentifierLogo href="#">{testIdentifierLogoSpanish}</IdentifierLogo>
      </IdentifierLogos>
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {`Un sitio web oficial de `}
        <Link href="#">Test Agency Name</Link>
        {` y `}
        <Link href="#">Other Test Agency Name</Link>
      </IdentifierIdentity>
    </IdentifierMasthead>
    <IdentifierLinks>{testLinksSpanish}</IdentifierLinks>
    <IdentifierGov aria-label="Información y servicios del Gobierno de EE. UU.">
      {testIdentifierGovContentSpanish}
    </IdentifierGov>
  </Identifier>
)

export const moreThanTwoParentsAndLogos = (): React.ReactElement => (
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

export const noLogosEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {`An official website of the `}
        <Link href="#">Test Agency Name</Link>
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

export const noLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {`Un sitio web oficial de `}
        <Link href="#">Test Agency Name Spanish</Link>
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

export const taxDisclaimerEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <IdentifierLogos>
        <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
      </IdentifierLogos>
      <IdentifierIdentity domain="domain.edu.mil.gov">
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

export const taxDisclaimerSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <IdentifierLogos>
        <IdentifierLogo href="#">{testIdentifierLogoSpanish}</IdentifierLogo>
      </IdentifierLogos>
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {`Un sitio web oficial de `}
        <Link href="#">Test Agency Name Spanish</Link>
        {`. Producido y publicado con dinero de los contribuyentes de impuestos.`}
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

export const taxDisclaimerAndMultipleParentsAndLogos = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <IdentifierLogos>
        <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
        <IdentifierLogo href="#">{testIdentifierLogo}</IdentifierLogo>
      </IdentifierLogos>
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {`An official website of the `}
        <Link href="#">Test Agency Name</Link>
        {` and the `}
        <Link href="#">Other Test Agency Name</Link>
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

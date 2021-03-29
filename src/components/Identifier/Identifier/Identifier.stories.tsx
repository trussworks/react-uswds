import React from 'react'
import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'
import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'

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

const testIdentifierGovContent = [
  <div className="usa-identifier__container" key="one">
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
  </div>,
]

const testIdentifierGovContentSpanish = [
  <div className="usa-identifier__container" key="two">
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
  </div>,
]

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

export const identifierDefault = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo agencyUrl="#" className="custom-class-name">
            {testIdentifierLogo}
          </IdentifierLogo>
        </div>
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label="Agency description">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`An official website of the `}
            <a href="testlink">Test Agency Name</a>
          </p>
        </div>
      </div>
    </IdentifierMasthead>
    <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
      <IdentifierLinkItem>
        <IdentifierLink href="#">About &lt;Parent shortname&gt;</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Accessibility support</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">FOIA requests</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">No FEAR Act data</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">
          Office of the Inspector General
        </IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Performance reports</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Privacy policy</IdentifierLink>
      </IdentifierLinkItem>
    </IdentifierLinks>
    <IdentifierGov aria-label="U.S. government information and services">
      {testIdentifierGovContent}
    </IdentifierGov>
  </Identifier>
)

export const identifierSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo agencyUrl="#">
            {testIdentifierLogoSpanish}
          </IdentifierLogo>
        </div>
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label="Descripción de la agencia">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`Un sitio web oficial de `}
            <a href="testlink">Test Agency Name Spanish</a>
          </p>
        </div>
      </div>
    </IdentifierMasthead>
    <IdentifierLinks navProps={{ 'aria-label': 'Enlaces importantes' }}>
      <IdentifierLinkItem>
        <IdentifierLink href="#">
          Acerca de &lt;Parent shortname&gt;
        </IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Soporte de accesibilidad</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Solicitud a través de FOIA</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Datos de la ley No FEAR</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Oficina del Inspector General</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Informes de desempeño</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Política de privacidad</IdentifierLink>
      </IdentifierLinkItem>
    </IdentifierLinks>
    <IdentifierGov aria-label="Información y servicios del Gobierno de EE. UU.">
      {testIdentifierGovContentSpanish}
    </IdentifierGov>
  </Identifier>
)

export const multipleParentsAndLogos = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo agencyUrl="#">{testIdentifierLogo}</IdentifierLogo>
          <IdentifierLogo agencyUrl="#">{testIdentifierLogo}</IdentifierLogo>
        </div>
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label="Agency description">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`An official website of the `}
            <a href="testlink">Test Agency Name</a>
            {` and the `}
            <a href="secondTestLink">Other Test Agency Name</a>
          </p>
        </div>
      </div>
    </IdentifierMasthead>
    <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
      <IdentifierLinkItem>
        <IdentifierLink href="#">About &lt;Parent shortname&gt;</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Accessibility support</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">FOIA requests</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">No FEAR Act data</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">
          Office of the Inspector General
        </IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Performance reports</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Privacy policy</IdentifierLink>
      </IdentifierLinkItem>
    </IdentifierLinks>
    <IdentifierGov aria-label="U.S. government information and services">
      {testIdentifierGovContent}
    </IdentifierGov>
  </Identifier>
)

export const multipleParentsAndLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo agencyUrl="#">
            {testIdentifierLogoSpanish}
          </IdentifierLogo>
          <IdentifierLogo agencyUrl="#">
            {testIdentifierLogoSpanish}
          </IdentifierLogo>
        </div>
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label="Descripción de la agencia">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`Un sitio web oficial de `}
            <a href="testlink">Test Agency Name</a>
            {` y `}
            <a href="secondTestLink">Other Test Agency Name</a>
          </p>
        </div>
      </div>
    </IdentifierMasthead>
    <IdentifierLinks>
      <IdentifierLinkItem>
        <IdentifierLink href="#">
          Acerca de &lt;Parent shortname&gt;
        </IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Soporte de accesibilidad</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Solicitud a través de FOIA</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Datos de la ley No FEAR</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Oficina del Inspector General</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Informes de desempeño</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Política de privacidad</IdentifierLink>
      </IdentifierLinkItem>
    </IdentifierLinks>
    <IdentifierGov aria-label="Información y servicios del Gobierno de EE. UU.">
      {testIdentifierGovContentSpanish}
    </IdentifierGov>
  </Identifier>
)

export const noLogosEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <div className="usa-identifier__container">
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label="Agency description">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`An official website of the `}
            <a href="testlink">Test Agency Name</a>
          </p>
        </div>
      </div>
    </IdentifierMasthead>
    <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
      <IdentifierLinkItem>
        <IdentifierLink href="#">About &lt;Parent shortname&gt;</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Accessibility support</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">FOIA requests</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">No FEAR Act data</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">
          Office of the Inspector General
        </IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Performance reports</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Privacy policy</IdentifierLink>
      </IdentifierLinkItem>
    </IdentifierLinks>
    <IdentifierGov aria-label="U.S. government information and services">
      {testIdentifierGovContent}
    </IdentifierGov>
  </Identifier>
)

export const noLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <div className="usa-identifier__container">
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label="Descripción de la agencia">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`Un sitio web oficial de `}
            <a href="testlink">Test Agency Name Spanish</a>
          </p>
        </div>
      </div>
    </IdentifierMasthead>
    <IdentifierLinks navProps={{ 'aria-label': 'Enlaces importantes' }}>
      <IdentifierLinkItem>
        <IdentifierLink href="#">
          Acerca de &lt;Parent shortname&gt;
        </IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Soporte de accesibilidad</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Solicitud a través de FOIA</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Datos de la ley No FEAR</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Oficina del Inspector General</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Informes de desempeño</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Política de privacidad</IdentifierLink>
      </IdentifierLinkItem>
    </IdentifierLinks>
    <IdentifierGov aria-label="Información y servicios del Gobierno de EE. UU.">
      {testIdentifierGovContentSpanish}
    </IdentifierGov>
  </Identifier>
)

export const taxDisclaimerEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo agencyUrl="#">{testIdentifierLogo}</IdentifierLogo>
        </div>
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label="Agency description">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`An official website of the `}
            <a href="testlink">Test Agency Name</a>
            {`. Produced and published at taxpayer expense.`}
          </p>
        </div>
      </div>
    </IdentifierMasthead>
    <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
      <IdentifierLinkItem>
        <IdentifierLink href="#">About &lt;Parent shortname&gt;</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Accessibility support</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">FOIA requests</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">No FEAR Act data</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">
          Office of the Inspector General
        </IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Performance reports</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Privacy policy</IdentifierLink>
      </IdentifierLinkItem>
    </IdentifierLinks>
    <IdentifierGov aria-label="U.S. government information and services">
      {testIdentifierGovContent}
    </IdentifierGov>
  </Identifier>
)

export const taxDisclaimerSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo agencyUrl="#">
            {testIdentifierLogoSpanish}
          </IdentifierLogo>
        </div>
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label="Descripción de la agencia">
          <p className="usa-identifier__identity-domain">domain.edu.mil.gov</p>
          <p className="usa-identifier__identity-disclaimer">
            {`Un sitio web oficial de `}
            <a href="testlink">Test Agency Name Spanish</a>
            {`. Producido y publicado con dinero de los contribuyentes de impuestos.`}
          </p>
        </div>
      </div>
    </IdentifierMasthead>
    <IdentifierLinks navProps={{ 'aria-label': 'Enlaces importantes' }}>
      <IdentifierLinkItem>
        <IdentifierLink href="#">
          Acerca de &lt;Parent shortname&gt;
        </IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Soporte de accesibilidad</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Solicitud a través de FOIA</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Datos de la ley No FEAR</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Oficina del Inspector General</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Informes de desempeño</IdentifierLink>
      </IdentifierLinkItem>
      <IdentifierLinkItem>
        <IdentifierLink href="#">Política de privacidad</IdentifierLink>
      </IdentifierLinkItem>
    </IdentifierLinks>
    <IdentifierGov aria-label="Información y servicios del Gobierno de EE. UU.">
      {testIdentifierGovContentSpanish}
    </IdentifierGov>
  </Identifier>
)

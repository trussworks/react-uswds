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

export const identifierDefault = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo
            agencyUrl="#"
            agencyName="Test Agency Name"
            src={dotGovIcon}
          />
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
    <IdentifierLinks>
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
    <IdentifierGov />
  </Identifier>
)

export const identifierSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo
            agencyUrl="#"
            agencyName="Test Agency Name Spanish"
            src={dotGovIcon}
          />
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
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierNoLogosEnglish = (): React.ReactElement => (
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
    <IdentifierLinks>
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
    <IdentifierGov />
  </Identifier>
)

export const identifierNoLogosSpanish = (): React.ReactElement => (
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
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierTaxDisclaimerEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Agency identifier">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo
            agencyUrl="#"
            agencyName="Test Agency Name"
            src={dotGovIcon}
          />
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
    <IdentifierLinks>
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
    <IdentifierGov />
  </Identifier>
)

export const identifierTaxDisclaimerSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead aria-label="Identificador de la agencia">
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <IdentifierLogo
            agencyUrl="#"
            agencyName="Test Agency Name Spanish"
            src={dotGovIcon}
          />
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
    <IdentifierGov language="spanish" />
  </Identifier>
)

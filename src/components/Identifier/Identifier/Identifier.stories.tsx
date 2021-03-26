import React from 'react'
import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'

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

const testAgency = {
  url: '#', // prob can pass url directly
  name: 'Test Agency Name', // prob can pass name directly
  ariaLabelAgencyIdentifier: 'Agency identifier',
  ariaLabelAgencyDescription: 'Agency description',
  identityDisclaimer: 'An official website of the',
  logo: dotGovIcon, // prob can pass logo directly
}

const testAgencySpanish = {
  url: '#',
  name: 'Test Agency Name Spanish',
  ariaLabelAgencyIdentifier: 'Identificador de la agencia',
  ariaLabelAgencyDescription: 'Descripción de la agencia',
  identityDisclaimer: 'Un sitio web oficial de',
  logo: dotGovIcon,
}

const testAgencyNoLogos = {
  url: '#',
  name: 'Test Parent Agency Name',
  ariaLabelAgencyIdentifier: 'Agency identifier',
  ariaLabelAgencyDescription: 'Agency description',
  identityDisclaimer: 'An official website of the',
}

export const identifierDefault = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead domain="domain.edu.mil.gov" parentAgency={testAgency} />
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
    <IdentifierMasthead
      domain="domain.edu.mil.gov"
      parentAgency={testAgencySpanish}
    />
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
    <IdentifierMasthead
      domain="domain.edu.mil.gov"
      parentAgency={testAgencyNoLogos}
    />
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
    <IdentifierMasthead
      domain="domain.edu.mil.gov"
      parentAgency={testAgencySpanish}
    />
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
    <IdentifierMasthead
      domain="domain.edu.mil.gov"
      parentAgency={testAgency}
      taxpayerDisclaimer="Produced and published at taxpayer expense."
    />
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
    <IdentifierMasthead
      domain="domain.edu.mil.gov"
      parentAgency={testAgencySpanish}
      taxpayerDisclaimer="Producido y publicado con dinero de los contribuyentes de impuestos."
    />
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

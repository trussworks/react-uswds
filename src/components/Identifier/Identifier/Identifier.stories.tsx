import React from 'react'
/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */
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
    info: `
  USWDS 2.0 Identifier component
  
  Source: https://designsystem.digital.gov/components/identifier/
  `,
  },
}

const testParentAgency = {
  url: '#',
  name: 'Test Parent Agency Name',
  logo: dotGovIcon,
}

const testParentAgencyNoLogos = {
  url: '#',
  name: 'Test Parent Agency Name',
}

export const identifierDefault = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      domain="domain.edu.mil.gov"
      parentAgency={testParentAgency}
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

export const identifierSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      language="spanish"
      domain="domain.edu.mil.gov"
      parentAgency={testParentAgency}
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
      parentAgency={testParentAgencyNoLogos}
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
      language="spanish"
      domain="domain.edu.mil.gov"
      parentAgency={testParentAgencyNoLogos}
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
      parentAgency={testParentAgency}
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
      language="spanish"
      domain="domain.edu.mil.gov"
      parentAgency={testParentAgency}
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

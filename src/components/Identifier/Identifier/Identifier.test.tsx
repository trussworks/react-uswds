import React from 'react'
import { render } from '@testing-library/react'

import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

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

describe('Identifier component', () => {
  it('renders without errors', () => {
    const { getAllByRole, queryByTestId } = render(
      <Identifier>
        <IdentifierMasthead
          domain="domain.gov.mil.edu"
          agencyInfo={testAgency}
        />
        <IdentifierLinks>
          <IdentifierLinkItem>
            <IdentifierLink href="#">
              About &lt;Parent shortname&gt;
            </IdentifierLink>
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
    expect(queryByTestId('identifier')).toBeInTheDocument()
    expect(getAllByRole('link')).toHaveLength(10)
  })

  it('renders in Spanish', () => {
    const { getAllByRole, queryByText } = render(
      <Identifier>
        <IdentifierMasthead
          domain="domain.edu.mil.gov"
          agencyInfo={testAgency}
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
            <IdentifierLink href="#">
              Oficina del Inspector General
            </IdentifierLink>
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

    expect(queryByText('Política de privacidad')).toBeInTheDocument()
    expect(queryByText('Visite USAGov en Español')).toBeInTheDocument()
    expect(getAllByRole('link')).toHaveLength(10)
  })

  it('renders without logos', () => {
    const { getAllByRole, queryByText } = render(
      <Identifier>
        <IdentifierMasthead
          domain="domain.gov.mil.edu"
          agencyInfo={testAgencyNoLogos}
        />
        <IdentifierLinks>
          <IdentifierLinkItem>
            <IdentifierLink href="#">
              About &lt;Parent shortname&gt;
            </IdentifierLink>
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
    expect(getAllByRole('link')).toHaveLength(9)
    expect(queryByText('Privacy policy')).toBeInTheDocument()
  })
})

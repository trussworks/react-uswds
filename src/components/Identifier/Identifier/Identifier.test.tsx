import React from 'react'
import { render } from '@testing-library/react'

import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

const testParentAgency = {
  url: 'https://www.parentAgencyExampleUrl.gov/',
  name: 'Test Parent Agency Name',
  logo: dotGovIcon,
}

const testParentAgencyNoLogo = {
  url: 'https://www.parentAgencyExampleUrl.gov/',
  name: 'Test Parent Agency No Logo Name',
}

describe('Identifier component', () => {
  it('renders without errors', () => {
    const { getAllByRole, queryByTestId } = render(
      <Identifier>
        <IdentifierMasthead
          domain="domain.gov.mil.edu"
          parentAgency={testParentAgency}
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
          parentAgency={testParentAgencyNoLogo}
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

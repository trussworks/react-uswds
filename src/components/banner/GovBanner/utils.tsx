import React from 'react'
import Icon from '../../Icon/Icons'

export type Language = 'english' | 'spanish'

export type TLD = '.gov' | '.mil'

export interface GovBannerCopy {
  header: string
  ariaLabel: string
  headerAction: string
  tldSectionHeader: string
  tldSectionContent: JSX.Element
  httpsSectionHeader: string
  httpsSectionContent: JSX.Element
}

export const getCopy = (language: Language, tld: TLD): GovBannerCopy => {
  switch (language) {
    case 'english':
      return {
        header: 'An official website of the United States government',
        ariaLabel: 'Official website of the United States government',
        headerAction: 'Here’s how you know',
        tldSectionHeader: `Official websites use ${tld}`,
        tldSectionContent: ((): JSX.Element => {
          switch (tld) {
            case '.gov':
              return (
                <>
                  A <strong>.gov</strong> website belongs to an official
                  government organization in the United States.
                </>
              )
            case '.mil':
              return (
                <>
                  A <strong>.mil</strong> website belongs to an official U.S.
                  Department of Defense organization.
                </>
              )
          }
        })(),
        httpsSectionHeader: `Secure ${tld} websites use HTTPS`,
        httpsSectionContent: (
          <>
            A{' '}
            <strong>
              lock (<Icon.Lock aria-label="Locked padlock icon" />)
            </strong>{' '}
            or <strong>https://</strong> means you’ve safely connected to the{' '}
            {tld} website. Share sensitive information only on official, secure
            websites.
          </>
        ),
      }
    case 'spanish':
      return {
        header: 'Un sitio oficial del Gobierno de Estados Unidos',
        ariaLabel: 'Un sitio oficial del Gobierno de Estados Unidos',
        headerAction: 'Así es como usted puede verificarlo',
        tldSectionHeader: `Los sitios web oficiales usan ${tld}`,
        tldSectionContent: ((): JSX.Element => {
          switch (tld) {
            case '.gov':
              return (
                <>
                  Un sitio web <strong>.gov</strong> pertenece a una
                  organización oficial del Gobierno de Estados Unidos.
                </>
              )
            case '.mil':
              return (
                <>
                  Un sitio web <strong>.mil</strong> pertenece a una
                  organización oficial del Departamento de Defensa de EE. UU.
                </>
              )
          }
        })(),
        httpsSectionHeader: `Los sitios web seguros ${tld} usan HTTPS`,
        httpsSectionContent: (
          <>
            Un{' '}
            <strong>
              candado (<Icon.Lock aria-label="Icono de candado cerrado" />)
            </strong>{' '}
            o <strong>https://</strong> significa que usted se conectó de forma
            segura a un sitio web {tld}. Comparta información sensible sólo en
            sitios web oficiales y seguros.
          </>
        ),
      }
  }
}

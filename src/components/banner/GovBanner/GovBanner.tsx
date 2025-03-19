import React, { useState, type JSX } from 'react'
import { Banner } from '../Banner/Banner'
import { BannerHeader } from '../BannerHeader/BannerHeader'
import { BannerFlag } from '../BannerFlag/BannerFlag'
import { BannerButton } from '../BannerButton/BannerButton'
import { BannerContent } from '../BannerContent/BannerContent'
import { BannerGuidance } from '../BannerGuidance/BannerGuidance'
import { BannerIcon } from '../BannerIcon/BannerIcon'
import { MediaBlockBody } from '../../mediablock/MediaBlockBody/MediaBlockBody'
import { Icon } from '../../Icon/Icons'

// assets
import flagImg from '@uswds/uswds/img/us_flag_small.png'
import dotGovIcon from '@uswds/uswds/img/icon-dot-gov.svg'
import httpsIcon from '@uswds/uswds/img/icon-https.svg'

type Language = 'english' | 'spanish'

type TLD = '.gov' | '.mil'

interface GovBannerCopy {
  header: string
  ariaLabel: string
  headerAction: string
  tldSectionHeader: string
  tldSectionContent: JSX.Element
  httpsSectionHeader: string
  httpsSectionContent: JSX.Element
}

const getCopy = (language: Language, tld: TLD): GovBannerCopy => {
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

type GovBannerProps = {
  tld?: TLD
  language?: Language
}

export const GovBanner = ({
  tld = '.gov',
  language = 'english',
  className,
  ...sectionProps
}: GovBannerProps & JSX.IntrinsicElements['section']): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    header,
    ariaLabel,
    headerAction,
    httpsSectionHeader,
    httpsSectionContent,
    tldSectionHeader,
    tldSectionContent,
  } = getCopy(language, tld)

  return (
    <Banner
      className={className}
      data-testid="govBanner"
      aria-label={ariaLabel}
      {...sectionProps}>
      <BannerHeader
        isOpen={isOpen}
        flagImg={<BannerFlag src={flagImg} aria-hidden alt="" />}
        headerText={header}
        headerActionText={headerAction}>
        <BannerButton
          isOpen={isOpen}
          aria-controls="gov-banner"
          onClick={(): void => {
            setIsOpen((previousIsOpen) => !previousIsOpen)
          }}>
          {headerAction}
        </BannerButton>
      </BannerHeader>
      <BannerContent id="gov-banner" isOpen={isOpen}>
        <div className="grid-row grid-gap-lg">
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={dotGovIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>{tldSectionHeader}</strong>
                <br />
                {tldSectionContent}
              </p>
            </MediaBlockBody>
          </BannerGuidance>
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={httpsIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>{httpsSectionHeader}</strong>
                <br />
                {httpsSectionContent}
              </p>
            </MediaBlockBody>
          </BannerGuidance>
        </div>
      </BannerContent>
    </Banner>
  )
}

export default GovBanner

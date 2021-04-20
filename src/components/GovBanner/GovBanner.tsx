import React, { useState } from 'react'
import classnames from 'classnames'

// assets
import flagImg from 'uswds/src/img/us_flag_small.png'
import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'
import httpsIcon from 'uswds/src/img/icon-https.svg'
import lockIcon from 'uswds/src/img/lock.svg'

type Language = 'english' | 'spanish'

type TLD = '.gov' | '.mil'

interface GovBannerCopy {
  header: string
  headerAction: string
  tldSectionHeader: string
  tldSectionContent: JSX.Element
  httpsSectionHeader: string
  httpsSectionContent: JSX.Element
}

const getCopy = (language: Language, tld: TLD): GovBannerCopy => {
  const lock = (
    <span className="icon-lock">
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <img
        src={lockIcon}
        className="usa-banner__lock-image"
        alt="lock"
        title="Lock"
        role="img"
      />
    </span>
  )

  switch (language) {
    case 'english':
      return {
        header: 'An official website of the United States government',
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
            A <strong>lock ({lock})</strong> or <strong>https://</strong> means
            you’ve safely connected to the {tld} website. Share sensitive
            information only on official, secure websites.
          </>
        ),
      }
    case 'spanish':
      return {
        header: 'Un sitio oficial del Gobierno de Estados Unidos',
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
            Un <strong>candado ({lock})</strong> o <strong>https://</strong>{' '}
            significa que usted se conectó de forma segura a un sitio web {tld}.
            Comparta información sensible sólo en sitios web oficiales y
            seguros.
          </>
        ),
      }
  }
}

interface GovBannerProps {
  tld?: TLD
  language?: Language
}

export const GovBanner = ({
  tld = '.gov',
  language = 'english',
  className,
  ...sectionProps
}: GovBannerProps & JSX.IntrinsicElements['section']): React.ReactElement => {
  const [isOpen, setOpenState] = useState(false)

  const classes = classnames('usa-banner', className)

  const copy = getCopy(language, tld)

  return (
    <section className={classes} data-testid="govBanner" {...sectionProps}>
      <div className="usa-accordion">
        <header className="usa-banner__header">
          <div className="usa-banner__inner">
            <div className="grid-col-auto">
              <img
                className="usa-banner__header-flag"
                src={flagImg}
                alt="U.S. flag"
              />
            </div>
            <div className="grid-col-fill tablet:grid-col-auto">
              <p className="usa-banner__header-text">{copy.header}</p>
              <p className="usa-banner__header-action" aria-hidden="true">
                {copy.headerAction}
              </p>
            </div>
            <button
              type="button"
              className="usa-accordion__button usa-banner__button"
              aria-expanded={isOpen}
              aria-controls="gov-banner"
              onClick={(): void => {
                setOpenState((isOpen) => !isOpen)
              }}>
              <span className="usa-banner__button-text">
                {copy.headerAction}
              </span>
            </button>
          </div>
        </header>
        <div
          className="usa-banner__content usa-accordion__content"
          id="gov-banner"
          hidden={!isOpen}>
          <div className="grid-row grid-gap-lg">
            <div className="usa-banner__guidance tablet:grid-col-6">
              <img
                className="usa-banner__icon usa-media-block__img"
                src={dotGovIcon}
                role="img"
                alt=""
                aria-hidden="true"
              />
              <div className="usa-media-block__body">
                <p>
                  <strong>{copy.tldSectionHeader}</strong>
                  <br />
                  {copy.tldSectionContent}
                </p>
              </div>
            </div>
            <div className="usa-banner__guidance tablet:grid-col-6">
              <img
                className="usa-banner__icon usa-media-block__img"
                src={httpsIcon}
                role="img"
                alt=""
                aria-hidden="true"
              />
              <div className="usa-media-block__body">
                <p>
                  <strong>{copy.httpsSectionHeader}</strong>
                  <br />
                  {copy.httpsSectionContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GovBanner

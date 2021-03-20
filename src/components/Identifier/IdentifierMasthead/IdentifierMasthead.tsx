import React from 'react'
import classnames from 'classnames'

// test assets
import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'
// import flagImg from 'uswds/src/img/us_flag_small.png'

type Language = 'english' | 'spanish'

interface IdentifierMastheadCopyMap {
  ariaLabelAgencyIdentifier: string
  ariaLabelAgencyDescription: string
  identityDisclaimer: string
}

const copyMap: Record<Language, IdentifierMastheadCopyMap> = {
  english: {
    ariaLabelAgencyIdentifier: 'Agency identifier',
    ariaLabelAgencyDescription: 'Agency description',
    identityDisclaimer: 'An official website of the',
  },
  spanish: {
    ariaLabelAgencyIdentifier: 'Identificador de la agencia',
    ariaLabelAgencyDescription: 'Descripción de la agencia',
    identityDisclaimer: 'Un sitio web oficial de',
  },
}

interface IdentifierMastheadProps {
  language?: Language
  className?: string
  hasLogo?: boolean
  hasSecondLogo?: boolean
  // agencyLogo?: type?
  // agencyLogos?: type?
  plaintextDomain: string
  parentAgencyUrl: string
  parentAgencyName: string
  otherAgencyName?: string
}

export const IdentifierMasthead = ({
  language = 'english',
  hasLogo = true,
  hasSecondLogo = false,
  className,
  plaintextDomain,
  parentAgencyUrl,
  parentAgencyName,
  otherAgencyName,
  ...sectionProps
}: IdentifierMastheadProps &
  JSX.IntrinsicElements['section']): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--masthead',
    className
  )

  const copy = copyMap[`${language}` as Language]

  return (
    <section
      data-testid="identifierMasthead"
      className={classes}
      aria-label={copy.ariaLabelAgencyIdentifier}
      {...sectionProps}>
      <div className="usa-identifier__container">
        {hasLogo ? (
          <div className="usa-identifier__logos">
            <a href="www.google.com" className="usa-identifier__logo">
              <img
                data-testid="identifierMasthead-logo"
                className="usa-identifier__logo-img"
                src={dotGovIcon}
                alt={`${parentAgencyName} logo`}
              />
            </a>
            {hasSecondLogo ? (
              <a href="www.google.com" className="usa-identifier__logo">
                <img
                  data-testid="identifierMasthead-logo"
                  className="usa-identifier__logo-img"
                  src={dotGovIcon}
                  alt={`${otherAgencyName} logo`}
                />
              </a>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label={copy.ariaLabelAgencyDescription}>
          <p className="usa-identifier__identity-domain">{plaintextDomain}</p>
          <p className="usa-identifier__identity-disclaimer">
            {copy.identityDisclaimer}
            &nbsp;
            <a href={parentAgencyUrl}>{parentAgencyName}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default IdentifierMasthead

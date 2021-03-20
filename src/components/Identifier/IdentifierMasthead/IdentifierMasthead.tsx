import React from 'react'
import classnames from 'classnames'

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
    identityDisclaimer: 'An official website of the ',
  },
  spanish: {
    ariaLabelAgencyIdentifier: 'Identificador de la agencia',
    ariaLabelAgencyDescription: 'Descripción de la agencia',
    identityDisclaimer: 'Un sitio web oficial de ',
  },
}

interface IdentifierMastheadProps {
  language?: Language
  className?: string
  plaintextDomain: string
  parentAgencyUrl: string
  parentAgencyName: string
}

export const IdentifierMasthead = ({
  language = 'english',
  className,
  plaintextDomain,
  parentAgencyUrl,
  parentAgencyName,
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
        <div className="usa-identifier__logos">
          <a href="www.google.com" className="usa-identifier__logo">
            <img
              className="usa-identifier__logo-img"
              // src="/assets/img/circle-gray-20.svg"

              alt={`${parentAgencyName} logo`}
            />
          </a>
        </div>
        <div
          className="usa-identifier__identity"
          aria-label={copy.ariaLabelAgencyDescription}>
          <p className="usa-identifier__identity-domain">{plaintextDomain}</p>
          <p className="usa-identifier__identity-disclaimer">
            An official website of the {/* copy.identityDisclaimer */}
            <a href={parentAgencyUrl}>{parentAgencyName}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default IdentifierMasthead

/*
- IdentifierMasthead <Section>
- Agency identifier (class="usa-identifier__section usa-identifier__section--masthead”)
    - img - agency logo (possibly is a link)
    - agency descrip
    - identify domain
    - identity disclaimer (and link)


<div class="usa-identifier">
  <section
    // class="usa-identifier__section usa-identifier__section--masthead"
    // aria-label="Agency identifier">
    // <div class="usa-identifier__container"
      // <div class="usa-identifier__logos">
        <a 
          href="javascript:void(0);" 
          // class="usa-identifier__logo"
        >
          // <img
            // class="usa-identifier__logo-img"
            src="/assets/img/circle-gray-20.svg"
            alt="&lt;Parent agency&gt; logo"
            role="img">
        // </a>
        // </div>
        // <div class="usa-identifier__identity" aria-label="Agency description">
          <p class="usa-identifier__identity-domain">domain.gov</p>
          <p class="usa-identifier__identity-disclaimer">An official website of the <a href="javascript:void(0);">&lt;Parent agency&gt;</a></p>
      </div>
    </div>
  </section>
*/

import React, { ReactElement } from 'react'
import classnames from 'classnames'

import {
  IdentifierLogo,
  IdentifierLogoProps,
} from '../IdentifierLogo/IdentifierLogo'

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

interface ParentAgency {
  url: string
  name: string
  logo?: ReactElement<IdentifierLogoProps>
}

interface IdentifierMastheadProps {
  parentAgencies: ParentAgency[]
  domain: string
  language?: Language
  taxpayerDisclaimer?: string
  className?: string
}

export const IdentifierMasthead = ({
  parentAgencies,
  domain,
  language = 'english',
  taxpayerDisclaimer,
  className,
  ...sectionProps
}: IdentifierMastheadProps &
  JSX.IntrinsicElements['section']): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--masthead',
    className
  )

  const copy = copyMap[`${language}` as Language]

  const identityDisclaimerCopy = 'placeholder text'

  // const logos = parentAgencies.map((agency) => {
  //   return agency.logo
  // })

  return (
    <section
      data-testid="identifierMasthead"
      className={classes}
      aria-label={copy.ariaLabelAgencyIdentifier}
      {...sectionProps}>
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          {/* <IdentifierLogo />  */}
          <div
            data-testid="identifierMasthead-agency-description"
            className="usa-identifier__identity"
            aria-label={copy.ariaLabelAgencyDescription}>
            {identityDisclaimerCopy}
            <p className="usa-identifier__identity-domain">{domain}</p>
            {parentAgencies ? (
              parentAgencies.map((agency) => (
                <>
                  <p className="usa-identifier__identity-disclaimer">
                    {copy.identityDisclaimer}
                    &nbsp;
                    <a href={agency.url}>{agency.name}</a>
                  </p>
                </>
              ))
            ) : (
              <></>
            )}
            {taxpayerDisclaimer}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IdentifierMasthead

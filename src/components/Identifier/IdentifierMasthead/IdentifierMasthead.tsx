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
    // taxpayerDisclaimer: 'Produced and published at taxpayer expense.'
  },
  spanish: {
    ariaLabelAgencyIdentifier: 'Identificador de la agencia',
    ariaLabelAgencyDescription: 'Descripción de la agencia',
    identityDisclaimer: 'Un sitio web oficial de',
    // taxpayerDisclaimer: 'Producido y publicado con dinero de los contribuyentes de impuestos.'
  },
}

interface ParentAgency {
  url: string
  name: string
  logo?: ReactElement<IdentifierLogoProps>
}

interface IdentifierMastheadProps {
  taxpayerDisclaimer?: string
  parentAgencies: ParentAgency[]
  domain: string
  language?: Language
  className?: string
}

export const IdentifierMasthead = ({
  taxpayerDisclaimer,
  parentAgencies,
  domain,
  language = 'english',
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

  const logos = parentAgencies.map((agency) => {
    return agency.logo
  })

  // 'usa-identifier__logos'
  return (
    <section
      data-testid="identifierMasthead"
      className={classes}
      aria-label={copy.ariaLabelAgencyIdentifier}
      {...sectionProps}>
      <div className="usa-identifier__container">
        {/* <IdentifierLogo />  */}
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label={copy.ariaLabelAgencyDescription}>
          <p className="usa-identifier__identity-domain">{domain}</p>
          {/* {parentAgencies.map((agency) => (
            <>
              <p className="usa-identifier__identity-disclaimer">
                {copy.identityDisclaimer}
                &nbsp;
                <a href={agency.url}>{agency.name}</a>
              </p>
            </>
          ))} */}
          {identityDisclaimerCopy}
        </div>
      </div>
    </section>
  )
}

export default IdentifierMasthead

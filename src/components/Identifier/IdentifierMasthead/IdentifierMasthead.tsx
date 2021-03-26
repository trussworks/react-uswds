import React, { ReactElement } from 'react'
import classnames from 'classnames'

import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'

interface ParentAgency {
  url: string
  name: string
  ariaLabelAgencyIdentifier: string
  ariaLabelAgencyDescription: string
  identityDisclaimer: string
  logo?: string
}

interface IdentifierMastheadProps {
  parentAgency: ParentAgency
  domain: string
  taxpayerDisclaimer?: string
  className?: string
}

export const IdentifierMasthead = ({
  parentAgency,
  domain,
  taxpayerDisclaimer,
  className,
  ...sectionProps
}: IdentifierMastheadProps &
  JSX.IntrinsicElements['section']): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--masthead',
    className
  )

  return (
    <section
      data-testid="identifierMasthead"
      className={classes}
      aria-label={parentAgency.ariaLabelAgencyIdentifier}
      {...sectionProps}>
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          {parentAgency.logo && (
            <IdentifierLogo
              agencyUrl={parentAgency.url}
              agencyName={parentAgency.name}
              src={parentAgency.logo}
            />
          )}
        </div>
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label={parentAgency.ariaLabelAgencyDescription}>
          <p className="usa-identifier__identity-domain">{domain}</p>
          <p className="usa-identifier__identity-disclaimer">
            {parentAgency.identityDisclaimer}
            &nbsp;
            <a href={parentAgency.url}>{parentAgency.name}</a>
            {taxpayerDisclaimer && `. ${taxpayerDisclaimer}`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default IdentifierMasthead

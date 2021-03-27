import React, { ReactElement } from 'react'
import classnames from 'classnames'

import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'

interface AgencyInfo {
  url: string
  name: string
  ariaLabelAgencyIdentifier: string
  ariaLabelAgencyDescription: string
  identityDisclaimer: string
  logo?: string
}

interface IdentifierMastheadProps {
  agencyInfo: AgencyInfo
  domain: string
  taxpayerDisclaimer?: string
  className?: string
}

export const IdentifierMasthead = ({
  agencyInfo,
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
      aria-label={agencyInfo.ariaLabelAgencyIdentifier}
      {...sectionProps}>
      <div className="usa-identifier__container">
        {agencyInfo.logo && (
          <div className="usa-identifier__logos">
            <IdentifierLogo
              agencyUrl={agencyInfo.url}
              agencyName={agencyInfo.name}
              src={agencyInfo.logo}
            />
          </div>
        )}
        <div
          data-testid="identifierMasthead-agency-description"
          className="usa-identifier__identity"
          aria-label={agencyInfo.ariaLabelAgencyDescription}>
          <p className="usa-identifier__identity-domain">{domain}</p>
          <p className="usa-identifier__identity-disclaimer">
            {agencyInfo.identityDisclaimer}
            &nbsp;
            <a href={agencyInfo.url}>{agencyInfo.name}</a>
            {taxpayerDisclaimer && `. ${taxpayerDisclaimer}`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default IdentifierMasthead

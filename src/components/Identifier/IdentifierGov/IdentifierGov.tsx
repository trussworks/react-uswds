import React from 'react'
import classnames from 'classnames'

type Language = 'english' | 'spanish'

interface IdentifierCopyMap {
  ariaLabel: string
  usaGovDescription: string
  visitGovUrl: string
  visitGovCopy: string
}

const copyMap: Record<Language, IdentifierCopyMap> = {
  english: {
    ariaLabel: 'U.S. government information and services',
    usaGovDescription: 'Looking for U.S. government information and services?',
    visitGovUrl: 'https://www.usa.gov/',
    visitGovCopy: 'Visit USA.gov',
  },
  spanish: {
    ariaLabel: 'Información y servicios del Gobierno de EE. UU.',
    usaGovDescription: '¿Necesita información y servicios del Gobierno?',
    visitGovUrl: 'https://www.usa.gov/espanol/',
    visitGovCopy: 'Visite USAGov en Español',
  },
}

interface IdentifierGovProps {
  language?: Language
  className?: string
}

export const IdentifierGov = ({
  language = 'english',
  className,
  ...sectionProps
}: IdentifierGovProps &
  JSX.IntrinsicElements['section']): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--usagov',
    className
  )

  const copy = copyMap[`${language}` as Language]

  return (
    <section
      data-testid="identifierGov"
      aria-label={copy.ariaLabel}
      className={classes}
      {...sectionProps}>
      <div className="usa-identifier__container">
        <div
          data-testid="identifierGov-description"
          className="usa-identifier__usagov-description">
          {copy.usaGovDescription}
        </div>
        &nbsp;
        <a
          data-testid="identifierGov-link"
          href={copy.visitGovUrl}
          className="usa-link">
          {copy.visitGovCopy}
        </a>
      </div>
    </section>
  )
}

export default IdentifierGov

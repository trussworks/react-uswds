import React from 'react'
import classnames from 'classnames'
import content from './content'

type Language = 'english' | 'spanish'

interface IdentifierGovProps {
  language?: Language
  className?: string
}

export const IdentifierGov = (
  props: IdentifierGovProps & JSX.IntrinsicElements['section']
): React.ReactElement => {
  const { language = 'english', className, ...sectionProps } = props
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--usagov',
    className
  )
  const { en, es } = content

  return (
    <section data-testid="identifierGov" className={classes} {...sectionProps}>
      <div className="usa-identifier__container">
        <div
          data-testid="identifierGov-description"
          className="usa-identifier__usagov-description">
          {en.usaGovDescription}
          <a
            data-testid="identifierGov-link"
            href={en.visitGovUrl}
            className="usa-link">
            {en.visitGovCopy}
          </a>
        </div>
      </div>
    </section>
  )
}

export default IdentifierGov

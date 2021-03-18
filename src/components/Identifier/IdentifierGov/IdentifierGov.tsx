import React from 'react'
import classnames from 'classnames'
import content from './content'

interface IdentifierGovProps {
  language?: 'english' | 'spanish'
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
  const copyMap = content[language]

  return (
    <section data-testid="identifierGov" className={classes} {...sectionProps}>
      <div className="usa-identifier__container">
        <div
          data-testid="identifierGov-description"
          className="usa-identifier__usagov-description">
          {copyMap.usaGovDescription}
          <a
            data-testid="identifierGov-link"
            href={copyMap.visitGovUrl}
            className="usa-link">
            {copyMap.visitGovCopy}
          </a>
        </div>
      </div>
    </section>
  )
}

export default IdentifierGov

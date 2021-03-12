import React from 'react'
import classnames from 'classnames'

type Language = 'english' | 'spanish'

// interface IdentifierGovCopy {usagov-description, usa-link}

interface IdentifierGovProps {
  language?: Language
}

export const IdentifierGov = (
  props: IdentifierGovProps & JSX.IntrinsicElements['section']
): React.ReactElement => {
  const { language = 'english', className, ...sectionProps } = props
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--usagov',
    className
  )
  return (
    <section data-testid="identifierGov" className={classes} {...sectionProps}>
      <div className="usa-identifier__container">
        <div className="usa-identifier__usagov-description">
          Looking for U.S. government information and services?
          <a href="https://www.usa.gov/" className="usa-link">
            Visit USA.gov
          </a>
        </div>
      </div>
    </section>
  )
}

export default IdentifierGov

/*
- IdentifierGov  <Section>
- U.S gov’t info and services (class="usa-identifier__section usa-identifier__section--usagov”)
    - container
        - usagov description
        - visit usa.gov link
*/

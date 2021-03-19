import React from 'react'
import classnames from 'classnames'

interface IdentifierMastheadProps {
  className?: string
}

export const IdentifierMasthead = (
  props: IdentifierMastheadProps & JSX.IntrinsicElements['section']
): React.ReactElement => {
  const { className, ...sectionProps } = props
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--masthead',
    className
  )

  return (
    <section
      data-testid="identifierMasthead"
      className={classes}
      {...sectionProps}>
      <div className="usa-identifier__container">
        <div className="usa-identifier__logos">
          <a href="www.google.com" className="usa-identifier__logo">
            <img
              className="usa-identifier__logo-img"
              // src="/assets/img/circle-gray-20.svg"

              alt="&lt;Parent agency&gt; logo"
            />
          </a>
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
    class="usa-identifier__section usa-identifier__section--masthead"
    aria-label="Agency identifier">
    <div class="usa-identifier__container">
    <div class="usa-identifier__logos">
        <a href="javascript:void(0);" class="usa-identifier__logo">
          <img
            class="usa-identifier__logo-img"
            
            src="/assets/img/circle-gray-20.svg"
            
            
            alt="&lt;Parent agency&gt; logo"
            
            role="img">
        </a>
        </div>
        <div class="usa-identifier__identity" aria-label="Agency description">
        <p class="usa-identifier__identity-domain">domain.gov</p>
        <p class="usa-identifier__identity-disclaimer">An official website of the <a href="javascript:void(0);">&lt;Parent agency&gt;</a></p>
      </div>
    </div>
  </section>
*/

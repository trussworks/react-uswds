import React from 'react'
import classnames from 'classnames'

export const IdentifierGov = (
  props: JSX.IntrinsicElements['section']
): React.ReactElement => {
  const { className, ...sectionProps } = props
  const classes = classnames('usa-identifier__section', className)
  return (
    <section data-testid="identifierGov" className={classes} {...sectionProps}>
      <div>identifier gov</div>
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

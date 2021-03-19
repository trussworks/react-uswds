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
      <div>identifier masthead</div>
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
*/

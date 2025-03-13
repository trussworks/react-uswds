import React, { type JSX } from 'react'
import classnames from 'classnames'

interface IdentifierMastheadProps {
  className?: string
  children?: React.ReactNode
}

export const IdentifierMasthead = ({
  className,
  children,
  ...sectionProps
}: IdentifierMastheadProps & JSX.IntrinsicElements['section']): JSX.Element => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--masthead',
    className
  )

  return (
    <section
      data-testid="identifierMasthead"
      className={classes}
      {...sectionProps}>
      <div className="usa-identifier__container">{children}</div>
    </section>
  )
}

export default IdentifierMasthead

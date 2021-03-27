import React, { ReactElement } from 'react'
import classnames from 'classnames'

interface IdentifierMastheadProps {
  ariaLabel: string

  className?: string
  children?: React.ReactNode
}

export const IdentifierMasthead = ({
  ariaLabel,
  className,
  children,
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
      aria-label={ariaLabel}
      {...sectionProps}>
      {children}
    </section>
  )
}

export default IdentifierMasthead

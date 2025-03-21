import React, { type JSX } from 'react'
import classnames from 'classnames'

interface IdentifierGovPropsInterface {
  children?: React.ReactNode
  className?: string
}

export type IdentifierGovProps = IdentifierGovPropsInterface &
  JSX.IntrinsicElements['section']

export const IdentifierGov = ({
  children,
  className,
  ...sectionProps
}: IdentifierGovProps): JSX.Element => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--usagov',
    className
  )

  return (
    <section data-testid="identifierGov" className={classes} {...sectionProps}>
      <div className="usa-identifier__container">{children}</div>
    </section>
  )
}

export default IdentifierGov

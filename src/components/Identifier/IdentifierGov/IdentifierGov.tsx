import React from 'react'
import classnames from 'classnames'

interface IdentifierGovProps {
  children?: React.ReactNode
  className?: string
}

export const IdentifierGov = ({
  children,
  className,
  ...sectionProps
}: IdentifierGovProps &
  JSX.IntrinsicElements['section']): React.ReactElement => {
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

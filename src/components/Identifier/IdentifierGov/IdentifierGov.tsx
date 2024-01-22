import React from 'react'
import classnames from 'classnames'

export type IdentifierGovProps = JSX.IntrinsicElements['section']

export const IdentifierGov = ({
  children,
  className,
  ...sectionProps
}: IdentifierGovProps): React.ReactElement => {
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

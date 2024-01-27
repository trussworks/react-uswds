import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type IdentifierGovProps = JSX.IntrinsicElements['section']

export const IdentifierGovForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  IdentifierGovProps
> = ({ children, className, ...sectionProps }, ref): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--usagov',
    className
  )

  return (
    <section
      ref={ref}
      data-testid="identifierGov"
      className={classes}
      {...sectionProps}>
      <div className="usa-identifier__container">{children}</div>
    </section>
  )
}

const IdentifierGov = forwardRef(IdentifierGovForwardRef)

export default IdentifierGov

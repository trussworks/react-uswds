import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type IdentifierMastheadProps = JSX.IntrinsicElements['section']

export const IdentifierMastheadForwardRef: React.ForwardRefRenderFunction<HTMLElement, IdentifierMastheadProps> = ({
  className,
  children,
  ...sectionProps
}, ref): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--masthead',
    className
  )

  return (
    <section
      ref={ref}
      data-testid="identifierMasthead"
      className={classes}
      {...sectionProps}>
      <div className="usa-identifier__container">{children}</div>
    </section>
  )
}

export const IdentifierMasthead = forwardRef(IdentifierMastheadForwardRef)

export default IdentifierMasthead

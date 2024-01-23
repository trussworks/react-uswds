import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type IdentifierLinkItemProps = JSX.IntrinsicElements['li']

export const IdentifierLinkItemForwardRef: React.ForwardRefRenderFunction<
  HTMLLIElement,
  IdentifierLinkItemProps
> = ({ children, className, ...listItemProps }, ref): React.ReactElement => {
  const classes = classnames('usa-identifier__required-links-item', className)
  return (
    <li ref={ref} className={classes} {...listItemProps}>
      {children}
    </li>
  )
}

export const IdentifierLinkItem = forwardRef(IdentifierLinkItemForwardRef)

export default IdentifierLinkItem

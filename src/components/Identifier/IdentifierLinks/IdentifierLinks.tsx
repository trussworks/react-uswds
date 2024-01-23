import React, { ReactElement, forwardRef } from 'react'
import classnames from 'classnames'
import { IdentifierLinkItemProps } from '../IdentifierLinkItem/IdentifierLinkItem'

export type IdentifierLinksProps = {
  children:
    | ReactElement<IdentifierLinkItemProps>
    | ReactElement<IdentifierLinkItemProps>[]
  className?: string
  navProps?: JSX.IntrinsicElements['nav']
  listProps?: JSX.IntrinsicElements['ul']
}

export const IdentifierLinksForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  IdentifierLinksProps
> = ({ children, className, navProps, listProps }, ref): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--required-links',
    className
  )

  return (
    <nav ref={ref} className={classes} {...navProps}>
      <div className="usa-identifier__container">
        <ul className="usa-identifier__required-links-list" {...listProps}>
          {children}
        </ul>
      </div>
    </nav>
  )
}

export const IdentifierLinks = forwardRef(IdentifierLinksForwardRef)

export default IdentifierLinks

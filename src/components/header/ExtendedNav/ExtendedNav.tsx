import React, { forwardRef } from 'react'
import classnames from 'classnames'

import NavCloseButton from '../NavCloseButton/NavCloseButton'
import NavList from '../NavList/NavList'

export type BaseExtendedNavProps = {
  primaryItems: React.ReactNode[]
  secondaryItems: React.ReactNode[]
  onToggleMobileNav?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  mobileExpanded?: boolean
}

export type ExtendedNavProps = BaseExtendedNavProps &
  JSX.IntrinsicElements['nav']

export const ExtendedNavForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  ExtendedNavProps
> = (
  {
    primaryItems,
    secondaryItems,
    mobileExpanded = false,
    children,
    className,
    onToggleMobileNav,
    ...navProps
  },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-nav',
    {
      'is-visible': mobileExpanded,
    },
    className
  )

  return (
    <nav ref={ref} className={classes} {...navProps}>
      <div className="usa-nav__inner">
        <NavCloseButton onClick={onToggleMobileNav} />
        <NavList items={primaryItems} type="primary" />
        <div className="usa-nav__secondary">
          <NavList items={secondaryItems} type="secondary" />
          {children}
        </div>
      </div>
    </nav>
  )
}

const ExtendedNav = forwardRef(ExtendedNavForwardRef)

export default ExtendedNav

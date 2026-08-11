import React, { type JSX } from 'react'
import classnames from 'classnames'

import { NavCloseButton } from '../NavCloseButton/NavCloseButton'
import { NavList } from '../NavList/NavList'
import { MobileNav } from '../MobileNav'

export type ExtendedNavProps = {
  primaryItems: React.ReactNode[]
  secondaryItems: React.ReactNode[]
  onToggleMobileNav?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  mobileExpanded?: boolean
} & JSX.IntrinsicElements['nav']

export const ExtendedNav = ({
  primaryItems,
  secondaryItems,
  mobileExpanded = false,
  children,
  className,
  onToggleMobileNav,
  ...navProps
}: ExtendedNavProps): JSX.Element => {
  const classes = classnames(
    'usa-nav',
    {
      'is-visible': mobileExpanded,
    },
    className
  )

  return (
    <MobileNav expanded={mobileExpanded} onToggleMobileNav={onToggleMobileNav}>
      <nav className={classes} {...navProps}>
        <div className="usa-nav__inner">
          <NavCloseButton onClick={onToggleMobileNav} />
          <NavList items={primaryItems} type="primary" />
          <div className="usa-nav__secondary">
            <NavList items={secondaryItems} type="secondary" />
            {children}
          </div>
        </div>
      </nav>
    </MobileNav>
  )
}

export default ExtendedNav

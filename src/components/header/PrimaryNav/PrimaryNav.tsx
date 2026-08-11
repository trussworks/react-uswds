import React, { type JSX } from 'react'
import classnames from 'classnames'

import { NavCloseButton } from '../NavCloseButton/NavCloseButton'
import { NavList } from '../NavList/NavList'
import { MobileNav } from '../MobileNav'

export type PrimaryNavProps = {
  items: React.ReactNode[]
  onToggleMobileNav?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  mobileExpanded?: boolean
} & JSX.IntrinsicElements['nav']

export const PrimaryNav = ({
  items,
  onToggleMobileNav,
  mobileExpanded,
  children,
  className,
  ...navProps
}: PrimaryNavProps): JSX.Element => {
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
        <NavCloseButton onClick={onToggleMobileNav} />
        <NavList items={items} type="primary" />
        {children}
      </nav>
    </MobileNav>
  )
}

export default PrimaryNav

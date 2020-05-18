import React from 'react'
import classnames from 'classnames'

import { NavCloseButton } from '../NavCloseButton/NavCloseButton'
import { NavList } from '../NavList/NavList'

type ExtendedNavProps = {
  primaryItems: React.ReactNode[]
  secondaryItems: React.ReactNode[]
  onToggleMobileNav?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  mobileExpanded?: boolean
}

export const ExtendedNav = (
  props: ExtendedNavProps & React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const {
    primaryItems,
    secondaryItems,
    mobileExpanded = false,
    children,
    className,
    onToggleMobileNav,
    ...navProps
  } = props

  const classes = classnames(
    'usa-nav',
    {
      'is-visible': mobileExpanded,
    },
    className
  )

  return (
    <nav className={classes} {...navProps}>
      <div className="usa-nav__inner">
        <NavCloseButton onClick={onToggleMobileNav} />
        <NavList items={primaryItems} primary={true} />
        <div className="usa-nav__secondary">
          <NavList items={secondaryItems} secondary={true} />
          {children}
        </div>
      </div>
    </nav>
  )
}

export default ExtendedNav

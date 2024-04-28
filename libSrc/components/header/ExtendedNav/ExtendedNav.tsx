import React from 'react'
import classnames from 'classnames'

import NavCloseButton from '../NavCloseButton/NavCloseButton.js'
import NavList from '../NavList/NavList.js'

export interface BaseExtendedNavProps {
  primaryItems: React.ReactNode[]
  secondaryItems: React.ReactNode[]
  onToggleMobileNav?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  mobileExpanded?: boolean
}

export type ExtendedNavProps = BaseExtendedNavProps &
  JSX.IntrinsicElements['nav']

const ExtendedNav = ({
  primaryItems,
  secondaryItems,
  mobileExpanded = false,
  children,
  className,
  onToggleMobileNav,
  ...navProps
}: ExtendedNavProps): React.ReactElement => {
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
        <NavList items={primaryItems} type="primary" />
        <div className="usa-nav__secondary">
          <NavList items={secondaryItems} type="secondary" />
          {children}
        </div>
      </div>
    </nav>
  )
}

export default ExtendedNav

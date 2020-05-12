import React from 'react'
import classnames from 'classnames'

import { NavButton } from '../NavButton/NavButton'
import { NavList } from '../NavList/NavList'

// assets
import closeImg from 'uswds/src/img/close.svg'

type ExtendedNavProps = {
  primaryItems: React.ReactNode[]
  secondaryItems: React.ReactNode[]
  onToggleMobileNav:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
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
        <NavButton className="usa-nav__close" onClick={onToggleMobileNav}>
          <img src={closeImg} alt="close" />
        </NavButton>
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

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
        <NavList
          items={primaryItems}
          keyPrefix="primarynav_item"
          ulClass="usa-nav__primary usa-accordion"
          liClass="usa-nav__primary-item"
        />
        <div className="usa-nav__secondary">
          <NavList
            items={secondaryItems}
            keyPrefix="secondarynav_item"
            ulClass="usa-nav__secondary-links"
            liClass="usa-nav__secondary-item"
          />
          {children}
        </div>
      </div>
    </nav>
  )
}

export default ExtendedNav

import React from 'react'
import classnames from 'classnames'

import { NavButton } from '../NavButton/NavButton'
import { NavList } from '../NavList/NavList'

// assets
import closeImg from 'uswds/src/img/close.svg'

type PrimaryNavProps = {
  items: React.ReactNode[]
  onToggleMobileNav:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
  mobileExpanded?: boolean
}

export const PrimaryNav = (
  props: PrimaryNavProps & React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const {
    items,
    onToggleMobileNav,
    mobileExpanded,
    children,
    className,
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
      <NavButton className="usa-nav__close" onClick={onToggleMobileNav}>
        <img src={closeImg} alt="close" />
      </NavButton>
      <NavList
        items={items}
        keyPrefix="primarynav_item"
        ulClass="usa-nav__primary usa-accordion"
        liClass="usa-nav__primary-item"
      />
      {children}
    </nav>
  )
}

export default PrimaryNav

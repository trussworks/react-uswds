import React from 'react'
import classnames from 'classnames'

import { NavButton } from '../../NavButton/NavButton'
import { List } from '../../List/List'

// assets
import closeImg from 'uswds/src/img/close.svg'

type ExtendedNavProps = {
  primaryItems: React.ReactNode[]
  secondaryItems: React.ReactNode[]
  mobileExpanded?: boolean
}

export const ExtendedNav = (
  props: ExtendedNavProps & React.HTMLAttributes<HTMLButtonElement>
): React.ReactElement => {
  const {
    primaryItems,
    secondaryItems,
    mobileExpanded,
    children,
    className,
    onClick,
  } = props

  const classes = classnames(
    'usa-nav',
    {
      'is-visible': mobileExpanded,
    },
    className
  )

  return (
    <nav className={classes}>
      <div className="usa-nav__inner">
        <NavButton className="usa-nav__close" onClick={onClick}>
          <img src={closeImg} alt="close" />
        </NavButton>
        <List
          items={primaryItems}
          keyPrefix="primarynav_item"
          ulClass="usa-nav__primary usa-accordion"
          liClass="usa-nav__primary-item"></List>
        <div className="usa-nav__secondary">
          <List
            items={secondaryItems}
            keyPrefix="secondarynav_item"
            ulClass="usa-nav__secondary-links"
            liClass="usa-nav__secondary-item"></List>
          {children}
        </div>
      </div>
    </nav>
  )
}

export default ExtendedNav

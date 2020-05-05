import React from 'react'
import classnames from 'classnames'

import { NavButton } from '../NavButton/NavButton'
import { List } from '../List/List'

// assets
import closeImg from 'uswds/src/img/close.svg'

type PrimaryNavProps = {
  items: React.ReactNode[]
  mobileExpanded?: boolean
}

export const PrimaryNav = (
  props: PrimaryNavProps & React.HTMLAttributes<HTMLButtonElement>
): React.ReactElement => {
  const { items, mobileExpanded, children, className, onClick } = props

  const classes = classnames(
    'usa-nav',
    {
      'is-visible': mobileExpanded,
    },
    className
  )

  return (
    <nav className={classes}>
      <NavButton className="usa-nav__close" onClick={onClick}>
        <img src={closeImg} alt="close" />
      </NavButton>
      <List
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

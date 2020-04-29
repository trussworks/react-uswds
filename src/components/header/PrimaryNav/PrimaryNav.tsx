import React from 'react'
import classnames from 'classnames'

import { NavButton } from '../NavButton/NavButton'

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
    // When mobile nav is added, add is-visible class to nav element
    <nav className={classes}>
      {/* Find image for the button..... */}
      <NavButton className="usa-nav__close" onClick={onClick}>
        <img src={closeImg} alt="close" />
      </NavButton>
      <ul className="usa-nav__primary usa-accordion">
        {items.map((item, i) => (
          <li key={`primarynav_item_${i}`} className="usa-nav__primary-item">
            {item}
          </li>
        ))}
      </ul>
      {children}
    </nav>
  )
}

export default PrimaryNav

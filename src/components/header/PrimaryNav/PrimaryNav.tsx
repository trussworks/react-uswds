import React from 'react'
import classnames from 'classnames'

type PrimaryNavProps = {
  items: React.ReactNode[]
  children?: React.ReactNode
}

export const PrimaryNav = ({
  items,
  children,
}: PrimaryNavProps): React.ReactElement => {
  const classes = classnames('usa-nav')

  return (
    <nav className={classes}>
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

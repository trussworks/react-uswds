import React, { type JSX } from 'react'
import classnames from 'classnames'

export type SideNavProps = {
  items: React.ReactNode[]
  isSubnav?: boolean
}

export const SideNav = ({
  items,
  isSubnav = false,
  ...ulProps
}: SideNavProps): JSX.Element => {
  const classes = classnames({
    'usa-sidenav': !isSubnav,
    'usa-sidenav__sublist': isSubnav,
  })

  return (
    <ul className={classes} data-testid="sidenav" {...ulProps}>
      {items.map((item, i) => (
        <li key={`sidenav_item_${i}`} className="usa-sidenav__item">
          {item}
        </li>
      ))}
    </ul>
  )
}

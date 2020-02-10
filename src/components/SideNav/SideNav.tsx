import React from 'react'
import classnames from 'classnames'

type SideNavProps = {
  items: React.ReactNode[]
  isSubnav?: boolean
}

export const SideNav = ({
  items,
  isSubnav = false,
}: SideNavProps): React.ReactElement => {
  const classes = classnames({
    'usa-sidenav': !isSubnav,
    'usa-sidenav__sublist': isSubnav,
  })

  return (
    <ul className={classes} data-testid="sidenav">
      {items.map((item, i) => (
        <li key={`sidenav_item_${i}`} className="usa-sidenav__item">
          {item}
        </li>
      ))}
    </ul>
  )
}

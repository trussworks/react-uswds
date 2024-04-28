import React from 'react'
import classnames from 'classnames'

export interface BaseSideNavProps {
  items: React.ReactNode[]
  isSubnav?: boolean
}

export type SideNavProps = BaseSideNavProps & JSX.IntrinsicElements['ul']

const SideNav = ({
  items,
  isSubnav = false,
  className,
  ...props
}: SideNavProps): React.ReactElement => {
  const classes = classnames(
    {
      'usa-sidenav': !isSubnav,
      'usa-sidenav__sublist': isSubnav,
    },
    className
  )

  return (
    <ul className={classes} data-testid="sidenav" {...props}>
      {items.map((item, i) => (
        <li key={`sidenav_item_${i}`} className="usa-sidenav__item">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default SideNav

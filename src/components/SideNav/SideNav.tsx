import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseSideNavProps = {
  items: React.ReactNode[]
  isSubnav?: boolean
}

export type SideNavProps = BaseSideNavProps & JSX.IntrinsicElements['ul']

export const SideNavForwardRef: React.ForwardRefRenderFunction<
  HTMLUListElement,
  SideNavProps
> = ({ items, isSubnav = false, ...props }, ref): React.ReactElement => {
  const classes = classnames({
    'usa-sidenav': !isSubnav,
    'usa-sidenav__sublist': isSubnav,
  })

  return (
    <ul ref={ref} className={classes} data-testid="sidenav" {...props}>
      {items.map((item, i) => (
        <li key={`sidenav_item_${i}`} className="usa-sidenav__item">
          {item}
        </li>
      ))}
    </ul>
  )
}

export const SideNav = forwardRef(SideNavForwardRef)

export default SideNav

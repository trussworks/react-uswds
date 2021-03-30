import React from 'react'
import classnames from 'classnames'

import { NavList, NavListProps } from '../NavList/NavList'

type MegaMenuProps = {
  items: React.ReactNode[][]
  isOpen: boolean
}

export const MegaMenu = ({
  items,
  isOpen,
  className,
  ...navListProps
}: MegaMenuProps & NavListProps): React.ReactElement => {
  const classes = classnames('usa-nav__submenu usa-megamenu', className)

  return (
    <div className={classes} hidden={!isOpen} data-testid="megamenu">
      <div className="grid-row grid-gap-4">
        {items.map((listItems, i) => (
          <div className="usa-col" key={`subnav_col_${i}`}>
            <NavList items={listItems} type="megamenu" {...navListProps} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MegaMenu

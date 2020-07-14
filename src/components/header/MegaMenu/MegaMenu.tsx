import React from 'react'

import { NavList, NavListProps } from '../NavList/NavList'

type MegaMenuProps = {
  items: React.ReactNode[][]
  isOpen: boolean
}

export const MegaMenu = (
  props: MegaMenuProps & NavListProps
): React.ReactElement => {
  const { items, isOpen, ...navListProps } = props
  return (
    <div
      className="usa-nav__submenu usa-megamenu"
      hidden={!isOpen}
      data-testid="megamenu">
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

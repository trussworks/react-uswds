import React from 'react'

import { NavList } from '../NavList/NavList'

type MegaMenuProps = {
  items: React.ReactNode[][]
  isOpen: boolean
}

export const MegaMenu = (props: MegaMenuProps): React.ReactElement => {
  const { items, isOpen } = props
  return (
    <div
      className="usa-nav__submenu usa-megamenu"
      hidden={!isOpen}
      data-testid="megamenu">
      <div className="grid-row grid-gap-4">
        {items.map((listItems, i) => (
          <div className="usa-col" key={`subnav_col_${i}`}>
            <NavList
              items={listItems}
              keyPrefix="subnav_item"
              ulClass="usa-nav__submenu-list"
              liClass="usa-nav__submenu-item"
              hidden={!isOpen}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MegaMenu

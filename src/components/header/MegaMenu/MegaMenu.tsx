import React from 'react'

import { NavList } from '../NavList/NavList'

type MegaMenuProps = {
  items: React.ReactNode[][]
  isOpen: boolean
}

export const MegaMenu = (
  props: MegaMenuProps & React.HTMLAttributes<HTMLUListElement>
): React.ReactElement => {
  const { items, isOpen, ...ulProps } = props
  return (
    <div
      className="usa-nav__submenu usa-megamenu"
      hidden={!isOpen}
      data-testid="megamenu">
      <div className="grid-row grid-gap-4">
        {items.map((listItems, i) => (
          <div className="usa-col" key={`subnav_col_${i}`}>
            <NavList items={listItems} type="megamenu" {...ulProps} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MegaMenu

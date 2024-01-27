import React, { forwardRef } from 'react'
import classnames from 'classnames'

import NavList, { NavListProps } from '../NavList/NavList'

export type BaseMegaMenuProps = {
  items: React.ReactNode[][]
  isOpen: boolean
}

export type MegaMenuProps = BaseMegaMenuProps & NavListProps

export const MegaMenuForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  MegaMenuProps
> = (
  { items, isOpen, className, ...navListProps },
  ref
): React.ReactElement => {
  const classes = classnames('usa-nav__submenu usa-megamenu', className)

  return (
    <div ref={ref} className={classes} hidden={!isOpen} data-testid="megamenu">
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

const MegaMenu = forwardRef(MegaMenuForwardRef)

export default MegaMenu

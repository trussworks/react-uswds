import React from 'react'
import classnames from 'classnames'

import NavList, { NavListProps } from '../NavList/NavList.js'
import Grid from '../../grid/Grid/Grid.js'

export type MegaMenuProps = {
  items: React.ReactNode[][]
  isOpen: boolean
} & NavListProps

const MegaMenu = ({
  items,
  isOpen,
  className,
  ...navListProps
}: MegaMenuProps): React.ReactElement => {
  const classes = classnames('usa-nav__submenu usa-megamenu', className)

  return (
    <div className={classes} hidden={!isOpen} data-testid="megamenu">
      <Grid row gap={4}>
        {items.map((listItems, i) => (
          <Grid col key={`subnav_col_${i}`}>
            <NavList items={listItems} type="megamenu" {...navListProps} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MegaMenu

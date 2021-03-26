import React from 'react'
import { NavList, NavListProps } from '../NavList/NavList'

type MenuProps = {
  items: React.ReactNode[]
  isOpen: boolean
}

export const Menu = ({
  className,
  items,
  isOpen,
  ...navListProps
}: MenuProps & NavListProps): React.ReactElement => {
  return (
    <NavList
      className={className}
      items={items}
      type="subnav"
      hidden={!isOpen}
      {...navListProps}
    />
  )
}

export default Menu

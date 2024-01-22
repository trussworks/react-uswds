import React from 'react'
import { NavList, NavListProps } from '../NavList/NavList'

export type BaseMenuProps = {
  items: React.ReactNode[]
  isOpen: boolean
  type?:
    | 'primary'
    | 'secondary'
    | 'subnav'
    | 'megamenu'
    | 'footerSecondary'
    | 'language'
}

export type MenuProps = BaseMenuProps & NavListProps

export const Menu = ({
  className,
  items,
  isOpen,
  type,
  ...navListProps
}: MenuProps): React.ReactElement => {
  return (
    <NavList
      className={className}
      items={items}
      type={type ? type : 'subnav'}
      hidden={!isOpen}
      {...navListProps}
    />
  )
}

export default Menu

import React from 'react'
import NavList, { type NavListProps } from '../NavList/NavList.js'

export interface BaseMenuProps {
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

const Menu = ({
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

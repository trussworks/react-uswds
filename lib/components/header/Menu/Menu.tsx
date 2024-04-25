import React from 'react'
import NavList, { NavListProps } from '../NavList/NavList.js'

export type MenuProps = {
  items: React.ReactNode[]
  isOpen: boolean
  type?:
    | 'primary'
    | 'secondary'
    | 'subnav'
    | 'megamenu'
    | 'footerSecondary'
    | 'language'
} & NavListProps

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

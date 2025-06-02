import React, { type JSX } from 'react'
import { NavList, NavListProps } from '../NavList/NavList'

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

export const Menu = ({
  className,
  items,
  isOpen,
  type,
  ...navListProps
}: MenuProps): JSX.Element => {
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

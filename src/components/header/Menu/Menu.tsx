import React from 'react'
import { NavList, NavListProps } from '../NavList/NavList'

type MenuProps = {
  items: React.ReactNode[]
  isOpen: boolean
}

export const Menu = (props: MenuProps & NavListProps): React.ReactElement => {
  const { items, isOpen, ...navListProps } = props
  return (
    <NavList items={items} type="subnav" hidden={!isOpen} {...navListProps} />
  )
}

export default Menu

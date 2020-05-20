import React from 'react'
import { NavList } from '../NavList/NavList'

type MenuProps = {
  items: React.ReactNode[]
  isOpen: boolean
}

export const Menu = (
  props: MenuProps & React.HTMLAttributes<HTMLUListElement>
): React.ReactElement => {
  const { items, isOpen, ...listProps } = props
  return <NavList items={items} subnav={true} hidden={!isOpen} {...listProps} />
}

export default Menu

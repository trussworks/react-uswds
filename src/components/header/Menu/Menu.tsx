import React from 'react'
import { NavList } from '../NavList/NavList'

type MenuProps = {
  items: React.ReactNode[]
  isOpen: boolean
}

export const Menu = (props: MenuProps): React.ReactElement => {
  const { items, isOpen } = props
  return <NavList items={items} subnav={true} hidden={!isOpen} />
}

export default Menu

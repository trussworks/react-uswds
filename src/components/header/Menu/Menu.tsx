import React from 'react'
import { List } from '../List/List'

type MenuProps = {
  items: React.ReactNode[]
  isOpen: boolean
}

export const Menu = (props: MenuProps): React.ReactElement => {
  const { items, isOpen } = props
  return (
    <List
      items={items}
      keyPrefix="subnav_item"
      ulClass="usa-nav__submenu"
      liClass="usa-nav__submenu-item"
      hidden={!isOpen}
    />
  )
}

export default Menu

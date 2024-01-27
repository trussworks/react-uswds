import React, { forwardRef } from 'react'
import NavList, { NavListProps, NavListRef } from '../NavList/NavList'

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

export type MenuProps = React.ComponentPropsWithRef<typeof Menu>

export type MenuRef = React.ComponentRef<typeof Menu>

export const MenuForwardRef: React.ForwardRefRenderFunction<
  NavListRef,
  BaseMenuProps & NavListProps
> = (
  { className, items, isOpen, type, ...navListProps },
  ref
): React.ReactElement => {
  return (
    <NavList
      ref={ref}
      className={className}
      items={items}
      type={type ? type : 'subnav'}
      hidden={!isOpen}
      {...navListProps}
    />
  )
}

const Menu = forwardRef(MenuForwardRef)

export default Menu

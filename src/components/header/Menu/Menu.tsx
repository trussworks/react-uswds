import React, { forwardRef } from 'react'
import NavList, { NavListProps } from '../NavList/NavList'

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

export const MenuForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  MenuProps
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

export const Menu = forwardRef(MenuForwardRef)

export default Menu

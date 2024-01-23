import React, { forwardRef } from 'react'

export type BaseNavMenuButtonProps = {
  label: React.ReactNode
}

export type NavMenuButtonProps = BaseNavMenuButtonProps &
  JSX.IntrinsicElements['button']

export const NavMenuButtonForwardRef: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  NavMenuButtonProps
> = ({ label, onClick, ...buttonProps }, ref): React.ReactElement => {
  return (
    <button
      ref={ref}
      className="usa-menu-btn"
      onClick={onClick}
      data-testid="navMenuButton"
      {...buttonProps}
      type="button">
      {label}
    </button>
  )
}

export const NavMenuButton = forwardRef(NavMenuButtonForwardRef)

export default NavMenuButton

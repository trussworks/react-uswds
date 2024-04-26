import React from 'react'

export interface BaseNavMenuButtonProps {
  label: React.ReactNode
}

export type NavMenuButtonProps = BaseNavMenuButtonProps &
  JSX.IntrinsicElements['button']

const NavMenuButton = ({
  label,
  onClick,
  ...buttonProps
}: NavMenuButtonProps): React.ReactElement => {
  return (
    <button
      className="usa-menu-btn"
      onClick={onClick}
      data-testid="navMenuButton"
      {...buttonProps}
      type="button">
      {label}
    </button>
  )
}

export default NavMenuButton

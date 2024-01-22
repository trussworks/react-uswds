import React from 'react'

export type BaseNavMenuButtonProps = {
  label: React.ReactNode
}

export type NavMenuButtonProps = BaseNavMenuButtonProps &
  JSX.IntrinsicElements['button']

export const NavMenuButton = ({
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

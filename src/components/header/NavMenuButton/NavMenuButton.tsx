import React, { type JSX } from 'react'

export type NavMenuButtonProps = {
  label: React.ReactNode
} & JSX.IntrinsicElements['button']

export const NavMenuButton = ({
  label,
  onClick,
  ...buttonProps
}: NavMenuButtonProps): JSX.Element => {
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

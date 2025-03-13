import React, { type JSX } from 'react'

type NavMenuButtonProps = {
  label: React.ReactNode
}

export const NavMenuButton = ({
  label,
  onClick,
  ...buttonProps
}: NavMenuButtonProps & JSX.IntrinsicElements['button']): JSX.Element => {
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

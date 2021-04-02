import React from 'react'

interface NavMenuButtonProps {
  label: React.ReactNode
}

export const NavMenuButton = ({
  label,
  onClick,
  ...buttonProps
}: NavMenuButtonProps &
  JSX.IntrinsicElements['button']): React.ReactElement => {
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

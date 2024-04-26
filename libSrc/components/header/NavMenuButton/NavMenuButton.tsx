import React from 'react'

export type NavMenuButtonProps = {
  label: React.ReactNode
} & JSX.IntrinsicElements['button']

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

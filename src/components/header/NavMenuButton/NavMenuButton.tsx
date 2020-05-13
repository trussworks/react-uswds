import React from 'react'

interface NavMenuButtonProps {
  label: React.ReactNode
}

export const NavMenuButton = (
  props: NavMenuButtonProps & React.HTMLAttributes<HTMLButtonElement>
): React.ReactElement => {
  const { label, onClick, ...buttonProps } = props

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

import React from 'react'

interface NavMenuButtonProps {
  label: React.ReactNode
}

export const NavMenuButton = (
  props: NavMenuButtonProps & JSX.IntrinsicElements['button']
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

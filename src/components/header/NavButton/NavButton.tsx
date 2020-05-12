import React from 'react'

export const NavButton = (
  props: React.HTMLAttributes<HTMLButtonElement>
): React.ReactElement => {
  const { children, onClick, ...buttonProps } = props

  return (
    <button
      onClick={onClick}
      data-testid="navButton"
      {...buttonProps}
      type="button">
      {children}
    </button>
  )
}

import React from 'react'

type NavDropDownButtonProps = {
  label: string
  id: string
  isOpen: boolean
  onToggle: () => void
}

export const NavDropDownButton = (
  props: NavDropDownButtonProps & React.HTMLAttributes<HTMLButtonElement>
): React.ReactElement => {
  const { label, id, isOpen, onToggle, ...buttonProps } = props

  return (
    <button
      data-testid="navDropDownButton"
      className="usa-accordion__button usa-nav__link"
      aria-expanded={isOpen}
      aria-controls={id}
      onClick={(): void => onToggle()}
      {...buttonProps}
      type="button">
      <span>{label}</span>
    </button>
  )
}

export default NavDropDownButton

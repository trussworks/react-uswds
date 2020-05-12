import React from 'react'
import { NavButton } from '../NavButton/NavButton'

type NavDropDownProps = {
  label: string
  id: string
  isOpen: boolean
  onToggle: () => void
}

export const NavDropDown = (props: NavDropDownProps): React.ReactElement => {
  const { label, id, isOpen, onToggle } = props
  return (
    <NavButton
      data-testid="navButton"
      className="usa-accordion__button usa-nav__link"
      aria-expanded={isOpen}
      aria-controls={id}
      onClick={(): void => onToggle()}>
      <span>{label}</span>
    </NavButton>
  )
}

export default NavDropDown

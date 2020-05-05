import React from 'react'

type NavDropDownProps = {
  label: string
  id: string
  isOpen: boolean
  onToggle: () => void
}

export const NavDropDown = (props: NavDropDownProps): React.ReactElement => {
  const { label, id, isOpen, onToggle } = props
  return (
    <button
      className="usa-accordion__button usa-nav__link"
      aria-expanded={isOpen}
      aria-controls={id}
      onClick={(): void => onToggle()}>
      <span>{label}</span>
    </button>
  )
}

export default NavDropDown

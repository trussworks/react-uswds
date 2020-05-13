import React from 'react'
import classnames from 'classnames'

type NavDropDownButtonProps = {
  label: string
  id: string
  isOpen: boolean
  onToggle: () => void
  isCurrent?: boolean
}

export const NavDropDownButton = (
  props: NavDropDownButtonProps & React.HTMLAttributes<HTMLButtonElement>
): React.ReactElement => {
  const {
    label,
    id,
    isOpen,
    onToggle,
    isCurrent,
    className,
    ...buttonProps
  } = props

  const classes = classnames(
    'usa-accordion__button',
    'usa-nav__link',
    {
      'usa-current': isCurrent,
    },
    className
  )

  return (
    <button
      data-testid="navDropDownButton"
      className={classes}
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

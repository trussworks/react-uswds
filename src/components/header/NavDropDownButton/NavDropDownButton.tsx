import React, { type JSX } from 'react'
import classnames from 'classnames'

export type NavDropDownButtonProps = {
  label: string
  /*
    Element (i.e. menu) id already present in DOM that will be controlled by this button
  */
  menuId: string
  isOpen: boolean
  onToggle: () => void
  isCurrent?: boolean
} & JSX.IntrinsicElements['button']

export const NavDropDownButton = ({
  label,
  menuId,
  isOpen,
  onToggle,
  isCurrent,
  className,
  ...buttonProps
}: NavDropDownButtonProps): JSX.Element => {
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
      aria-controls={menuId}
      onClick={(): void => onToggle()}
      {...buttonProps}
      type="button">
      <span>{label}</span>
    </button>
  )
}

export default NavDropDownButton

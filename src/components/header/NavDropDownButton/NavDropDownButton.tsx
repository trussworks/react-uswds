import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseNavDropDownButtonProps = {
  label: string
  /*
    Element (i.e. menu) id already present in DOM that will be controlled by this button
  */
  menuId: string
  isOpen: boolean
  onToggle: () => void
  isCurrent?: boolean
}

export type NavDropDownButtonProps = BaseNavDropDownButtonProps &
  JSX.IntrinsicElements['button']

export const NavDropDownButtonForwardRef: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  NavDropDownButtonProps
> = (
  { label, menuId, isOpen, onToggle, isCurrent, className, ...buttonProps },
  ref
): React.ReactElement => {
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
      ref={ref}
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

const NavDropDownButton = forwardRef(NavDropDownButtonForwardRef)

export default NavDropDownButton

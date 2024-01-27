import React, { forwardRef } from 'react'
import classnames from 'classnames'
// assets
import Icon from '../../icon/Icon/Icons'

export type NavCloseButtonProps = JSX.IntrinsicElements['button']

export const NavCloseButtonForwardRef: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  NavCloseButtonProps
> = ({
  onClick,
  className,
  ...buttonProps
}: NavCloseButtonProps): React.ReactElement => {
  const classes = classnames('usa-nav__close', className)

  return (
    <button
      className={classes}
      onClick={onClick}
      data-testid="navCloseButton"
      aria-label="Close Navigation Menu"
      {...buttonProps}
      type="button">
      <Icon.Close size={3} aria-hidden="true" />
    </button>
  )
}

const NavCloseButton = forwardRef(NavCloseButtonForwardRef)

export default NavCloseButton

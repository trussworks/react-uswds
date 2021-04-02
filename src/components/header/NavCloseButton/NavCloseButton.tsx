import React from 'react'
import classnames from 'classnames'
// assets
import closeImg from 'uswds/src/img/close.svg'

export const NavCloseButton = ({
  onClick,
  className,
  ...buttonProps
}: JSX.IntrinsicElements['button']): React.ReactElement => {
  const classes = classnames('usa-nav__close', className)

  return (
    <button
      className={classes}
      onClick={onClick}
      data-testid="navCloseButton"
      {...buttonProps}
      type="button">
      <img src={closeImg} alt="close" />
    </button>
  )
}

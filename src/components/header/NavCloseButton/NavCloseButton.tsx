import React from 'react'

// assets
import closeImg from 'uswds/src/img/close.svg'

export const NavCloseButton = (
  props: React.HTMLAttributes<HTMLButtonElement>
): React.ReactElement => {
  const { onClick, ...buttonProps } = props

  return (
    <button
      className="usa-nav__close"
      onClick={onClick}
      data-testid="navCloseButton"
      {...buttonProps}
      type="button">
      <img src={closeImg} alt="close" />
    </button>
  )
}

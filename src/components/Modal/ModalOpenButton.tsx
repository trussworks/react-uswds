/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import classnames from 'classnames'

type ModalOpenButtonProps = {
  handleOpen: (e: React.MouseEvent) => void
}

// TODO - support <a> or <button> element
// if A: set role="button"
// pass click handler, prevent default

export const ModalOpenButton = ({
  children,
  className,
  handleOpen,
  ...props
}: ModalOpenButtonProps &
  JSX.IntrinsicElements['a']): React.ReactElement<HTMLAnchorElement> => {
  const classes = classnames('usa-button', className)

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    handleOpen(e)
  }

  return (
    <a
      {...props}
      className={classes}
      role="button"
      data-open-modal
      onClick={handleClick}>
      {children}
    </a>
  )
}

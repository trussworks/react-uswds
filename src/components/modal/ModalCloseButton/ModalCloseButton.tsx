import React, { type JSX } from 'react'
import { Icon } from '../../Icon/Icons'
import { Button } from '../../Button/Button'

interface ModalCloseButtonProps {
  handleClose: () => void
}

export const ModalCloseButton = ({
  handleClose,
  ...buttonProps
}: ModalCloseButtonProps & JSX.IntrinsicElements['button']): JSX.Element => {
  return (
    <Button
      aria-label="Close this window"
      {...buttonProps}
      className="usa-modal__close"
      onClick={handleClose}
      data-close-modal
      type="button">
      <Icon.Close aria-hidden="true" />
    </Button>
  )
}

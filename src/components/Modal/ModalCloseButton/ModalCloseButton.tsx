import React from 'react'
import { IconClose } from '../../Icon/Icons'
import { Button } from '../../Button/Button'

interface ModalCloseButtonProps {
  handleClose: () => void
}

// TODO - accept custom aria-label

export const ModalCloseButton = ({
  handleClose,
  ...buttonProps
}: ModalCloseButtonProps &
  JSX.IntrinsicElements['button']): React.ReactElement => {
  return (
    <Button
      className="usa-modal__close"
      aria-label="Close this window"
      onClick={handleClose}
      data-close-modal
      type="button"
      {...buttonProps}>
      <IconClose aria-hidden="true" />
    </Button>
  )
}

export default ModalCloseButton

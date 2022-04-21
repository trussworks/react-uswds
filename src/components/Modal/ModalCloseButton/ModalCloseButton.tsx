import React from 'react'
import { Icon } from '../../Icon/Icons'
import { Button } from '../../Button/Button'

interface ModalCloseButtonProps {
  handleClose: () => void
}

export const ModalCloseButton = ({
  handleClose,
  ...buttonProps
}: ModalCloseButtonProps &
  JSX.IntrinsicElements['button']): React.ReactElement => {
  return (
    <Button
      {...buttonProps}
      className="usa-modal__close"
      aria-label="Close this window"
      onClick={handleClose}
      data-close-modal
      type="button"
    >
      <Icon.Close aria-hidden="true" />
    </Button>
  )
}

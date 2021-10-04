import React, { forwardRef } from 'react'
import { IconClose } from '../../Icon/Icons'
import { Button } from '../../Button/Button'

interface ModalCloseButtonProps {
  handleClose: () => void
}

// TODO - accept custom aria-label

export const ModalCloseButton = forwardRef(
  (
    {
      handleClose,
      ...buttonProps
    }: ModalCloseButtonProps & JSX.IntrinsicElements['button'],
    ref: React.ForwardedRef<HTMLButtonElement>
  ): React.ReactElement => {
    return (
      <Button
        {...buttonProps}
        className="usa-modal__close"
        aria-label="Close this window"
        onClick={handleClose}
        data-close-modal
        type="button"
        ref={ref}>
        <IconClose aria-hidden="true" />
      </Button>
    )
  }
)

ModalCloseButton.displayName = 'ModalCloseButton'

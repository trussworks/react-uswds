import React, { forwardRef } from 'react'
import { Icon } from '../../Icon/Icons'
import Button from '../../Button/Button'

export interface BaseModalCloseButtonProps {
  handleClose: () => void
}

export type ModalCloseButtonProps = BaseModalCloseButtonProps & JSX.IntrinsicElements['button']

export const ModalCloseButtonForwardRef: React.ForwardRefRenderFunction<HTMLButtonElement, ModalCloseButtonProps> = ({
  handleClose,
  ...buttonProps
}, ref): React.ReactElement => {
  return (
    <Button
      ref={ref}
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

export const ModalCloseButton = forwardRef(ModalCloseButtonForwardRef)

export default ModalCloseButton
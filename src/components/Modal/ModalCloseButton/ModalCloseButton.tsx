import React, { forwardRef } from 'react'
import Icons from '../../icon/Icon/Icons'
import Button, { ButtonProps, ButtonRef } from '../../button/Button/Button'

export interface BaseModalCloseButtonProps {
  handleClose: () => void
}

export type ModalCloseButtonProps = React.ComponentPropsWithRef<typeof Button>

export type ModalCloseButtonRef = React.ComponentRef<typeof Button>

export const ModalCloseButtonForwardRef: React.ForwardRefRenderFunction<
  ButtonRef,
  BaseModalCloseButtonProps & ButtonProps
> = ({ handleClose, ...buttonProps }, ref): React.ReactElement => {
  return (
    <Button
      ref={ref}
      aria-label="Close this window"
      {...buttonProps}
      className="usa-modal__close"
      onClick={handleClose}
      data-close-modal
      type="button">
      <Icons.Close aria-hidden="true" />
    </Button>
  )
}

const ModalCloseButton = forwardRef(ModalCloseButtonForwardRef)

export default ModalCloseButton

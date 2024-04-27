import React from 'react'
import Icon from '../../Icon/Icon.js'
import Button from '../../Button/ButtonForwardRef.js'

export interface BaseModalCloseButtonProps {
  handleClose: () => void
}

export type ModalCloseButtonProps = BaseModalCloseButtonProps &
  JSX.IntrinsicElements['button']

const ModalCloseButton = ({
  handleClose,
  ...buttonProps
}: ModalCloseButtonProps): React.ReactElement => {
  return (
    <Button
      aria-label="Close this window"
      className="usa-modal__close"
      onClick={handleClose}
      data-close-modal
      type="button"
      {...buttonProps}>
      <Icon.Close aria-hidden="true" />
    </Button>
  )
}

export default ModalCloseButton

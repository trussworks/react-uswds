import React from 'react'
import Icon from '../../Icon/Icons.js'
import Button from '../../Button/Button.js'

export type ModalCloseButtonProps = {
  handleClose: () => void
} & JSX.IntrinsicElements['button']

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

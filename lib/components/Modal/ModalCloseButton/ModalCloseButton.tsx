import React from 'react'
import Icon from '../../Icon/Icons'
import Button from '../../Button/Button'

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
      {...buttonProps}
      className="usa-modal__close"
      onClick={handleClose}
      data-close-modal
      type="button">
      <Icon.Close aria-hidden="true" />
    </Button>
  )
}

export default ModalCloseButton

import React from 'react'

import { ModalRef } from '../Modal/Modal.js'
import Button, { ButtonProps } from '../../Button/Button.js'

export type ModalToggleButtonProps = {
  modalRef: React.RefObject<ModalRef>
  opener?: boolean
  closer?: boolean
} & Omit<ButtonProps, 'type'> &
  JSX.IntrinsicElements['button']

const ModalToggleButton = ({
  modalRef,
  children,
  opener,
  closer,
  onClick,
  ...props
}: ModalToggleButtonProps): React.ReactElement<HTMLButtonElement> => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!modalRef || !modalRef.current) {
      console.error('ModalRef is required')
      return false
    }

    if (onClick) {
      onClick(e)
    }

    if (opener && !closer) {
      // Only open
      modalRef.current.toggleModal(e, true)
    } else if (closer && !opener) {
      // Only close
      modalRef.current.toggleModal(e, false)
    } else {
      // Toggle
      modalRef.current.toggleModal(e)
    }
  }

  const dataProps: {
    'data-close-modal'?: boolean
    'data-open-modal'?: boolean
  } = {
    'data-close-modal': true,
    'data-open-modal': true,
  }

  if (opener && !closer) delete dataProps['data-close-modal']
  if (closer && !opener) delete dataProps['data-open-modal']

  return (
    <Button
      type="button"
      aria-controls={modalRef?.current?.modalId}
      onClick={handleClick}
      {...props}
      {...dataProps}>
      {children}
    </Button>
  )
}

export default ModalToggleButton
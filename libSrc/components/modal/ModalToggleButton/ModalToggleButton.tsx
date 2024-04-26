import React from 'react'

import type { ModalRef } from '../Modal/Modal.js'
import { type ButtonProps } from '../../Button/Button.js'
import Button from '../../Button/ButtonForwardRef.js'

export interface BaseModalToggleButtonProps {
  modalRef: React.RefObject<ModalRef>
  opener?: boolean
  closer?: boolean
}

export type ModalToggleButtonProps = BaseModalToggleButtonProps &
  Omit<ButtonProps, 'type'> &
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

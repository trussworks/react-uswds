import React from 'react'

import { ModalRef } from './Modal'
import { ButtonProps, Button } from '../Button/Button'

type ModalToggleButtonProps = {
  modalRef: React.RefObject<ModalRef>
  opener?: boolean
  closer?: boolean
}

export const ModalToggleButton = ({
  modalRef,
  children,
  opener,
  closer,
  ...props
}: ModalToggleButtonProps &
  Omit<ButtonProps, 'type'> &
  JSX.IntrinsicElements['button']): React.ReactElement<HTMLButtonElement> => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!modalRef || !modalRef.current) {
      console.error('ModalRef is required')
      return false
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
      {...props}
      {...dataProps}
      type="button"
      aria-controls={modalRef?.current?.modalId}
      onClick={handleClick}>
      {children}
    </Button>
  )
}

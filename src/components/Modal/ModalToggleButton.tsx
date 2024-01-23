import React, { forwardRef } from 'react'

import { ModalRef } from './Modal'
import Button, { ButtonProps } from '../Button/Button'

export type BaseModalToggleButtonProps = {
  modalRef: React.RefObject<ModalRef>
  opener?: boolean
  closer?: boolean
}

export type ModalToggleButtonProps = BaseModalToggleButtonProps &
  Omit<ButtonProps, 'type'> &
  JSX.IntrinsicElements['button']

export const ModalToggleButtonForwardRef: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ModalToggleButtonProps
> = (
  { modalRef, children, opener, closer, ...props },
  ref
): React.ReactElement<HTMLButtonElement> => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!modalRef || !modalRef.current) {
      console.error('ModalRef is required')
      return false
    }

    if (props.onClick) {
      props.onClick(e)
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
      ref={ref}
      {...props}
      {...dataProps}
      type="button"
      aria-controls={modalRef?.current?.modalId}
      onClick={handleClick}>
      {children}
    </Button>
  )
}

export const ModalToggleButton = forwardRef(ModalToggleButtonForwardRef)

export default ModalToggleButton

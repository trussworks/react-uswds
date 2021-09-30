import React from 'react'

import { ModalHook } from './utils'
import { ModalWindow } from './ModalWindow/ModalWindow'
import { ModalWrapper } from './ModalWrapper/ModalWrapper'

interface ModalProps {
  id: string
  children: React.ReactNode
  className?: string
  isLarge?: boolean
  forceAction?: boolean
}

// isopen effect
// return open/close functions
// close button controls

export const Modal = ({
  id,
  children,
  isOpen,
  closeModal,
  isLarge = false,
  forceAction = false,
  ...divProps
}: ModalProps &
  Pick<ModalHook, 'isOpen' | 'closeModal'> &
  JSX.IntrinsicElements['div']): React.ReactElement => {
  const ariaLabelledBy = divProps['aria-labelledby']
  const ariaDescribedBy = divProps['aria-describedby']

  delete divProps['aria-labelledby']
  delete divProps['aria-describedby']

  return (
    <ModalWrapper
      role="dialog"
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      data-force-action={forceAction}
      isVisible={isOpen}>
      <ModalWindow
        modalId={id}
        {...divProps}
        isLarge={isLarge}
        forceAction={forceAction}
        tabIndex={-1}
        handleClose={closeModal}>
        {children}
      </ModalWindow>
    </ModalWrapper>
  )
}

export default Modal

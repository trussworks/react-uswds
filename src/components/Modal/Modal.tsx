import React, { useEffect, useState } from 'react'

import { ModalHook } from './utils'
import { ModalWindow } from './ModalWindow/ModalWindow'
import { ModalWrapper } from './ModalWrapper/ModalWrapper'

interface ModalComponentProps {
  id: string
  children: React.ReactNode
  className?: string
  isLarge?: boolean
  forceAction?: boolean
  modalRoot?: string
}

export type ModalProps = ModalComponentProps &
  Pick<ModalHook, 'isOpen' | 'closeModal'> &
  JSX.IntrinsicElements['div']

// isOpen effect
// modal toggle button (A, button)
//  - aria-controls=modal ID
// focus trap
// createPortal / default to document.body.appendChild?
// handle body padding

export const Modal = ({
  id,
  children,
  isOpen,
  closeModal,
  isLarge = false,
  forceAction = false,
  modalRoot = '.usa-modal-wrapper',
  ...divProps
}: ModalProps): React.ReactElement => {
  const [mounted, setMounted] = useState(false)

  const modalRootSelector = modalRoot || '.usa-modal-wrapper'

  const NON_MODALS = `body > *:not(${modalRootSelector}):not([aria-hidden])`
  const NON_MODALS_HIDDEN = `[data-modal-hidden]`

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const { body } = document

      if (isOpen === true) {
        body.classList.add('usa-js-modal--active')
        document.querySelectorAll(NON_MODALS).forEach((el) => {
          el.setAttribute('aria-hidden', 'true')
          el.setAttribute('data-modal-hidden', '')
        })

        if (forceAction) {
          body.classList.add('usa-js-no-click')
        }
      } else if (isOpen === false) {
        body.classList.remove('usa-js-modal--active')
        body.classList.remove('usa-js-no-click')

        document.querySelectorAll(NON_MODALS_HIDDEN).forEach((el) => {
          el.removeAttribute('aria-hidden')
          el.removeAttribute('data-modal-hidden')
        })
      }
    }

    return () => {
      const { body } = document

      body.classList.remove('usa-js-modal--active')
      body.classList.remove('usa-js-no-click')

      document.querySelectorAll(NON_MODALS_HIDDEN).forEach((el) => {
        el.removeAttribute('aria-hidden')
        el.removeAttribute('data-modal-hidden')
      })
    }
  }, [isOpen])

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

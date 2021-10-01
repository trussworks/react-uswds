import React, { useEffect, useState } from 'react'

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

// isOpen effect
// modal toggle button (A, button)
//  - aria-controls=modal ID
// focus trap
// createPortal / default to document.body.appendChild?
// handle body padding

const NON_MODALS = `body > *:not(.usa-modal-wrapper):not([aria-hidden])`
const NON_MODALS_HIDDEN = `[data-modal-hidden]`

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const { body } = document

      if (isOpen === true) {
        console.log('OPEN MODAL')
        body.classList.add('usa-js-modal--active')
        document.querySelectorAll(NON_MODALS).forEach((el) => {
          console.log('el', el.getAttribute('data-testid'))
          el.setAttribute('aria-hidden', 'true')
          el.setAttribute('data-modal-hidden', '')
        })

        if (forceAction) {
          body.classList.add('usa-js-no-click')
        }
      } else if (isOpen === false) {
        console.log('CLOSE MODAL')
        body.classList.remove('usa-js-modal--active')
        body.classList.remove('usa-js-no-click')

        document.querySelectorAll(NON_MODALS_HIDDEN).forEach((el) => {
          el.removeAttribute('aria-hidden')
          el.removeAttribute('data-modal-hidden')
        })
      }
    }

    return () => {
      console.log('UNMOUNT MODAL')
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

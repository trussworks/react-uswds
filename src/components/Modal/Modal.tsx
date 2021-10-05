import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import FocusTrap from 'focus-trap-react'

import { useModal, getScrollbarWidth } from './utils'
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

export type ModalProps = ModalComponentProps & JSX.IntrinsicElements['div']

export type ModalRef = {
  modalId: string
  modalIsOpen: boolean
  toggleModal: (event?: React.MouseEvent, open?: boolean) => boolean
}

export const Modal = forwardRef(
  (
    {
      id,
      children,
      isLarge = false,
      forceAction = false,
      modalRoot = '.usa-modal-wrapper',
      ...divProps
    }: ModalProps,
    ref: React.Ref<ModalRef>
  ): React.ReactElement => {
    const { isOpen, toggleModal } = useModal()
    const [mounted, setMounted] = useState(false)
    const initialPaddingRef = useRef<string>()
    const tempPaddingRef = useRef<string>()
    const modalEl = useRef<HTMLDivElement>(null)

    const modalRootSelector = modalRoot || '.usa-modal-wrapper'

    const NON_MODALS = `body > *:not(${modalRootSelector}):not([aria-hidden])`
    const NON_MODALS_HIDDEN = `[data-modal-hidden]`

    const closeModal = (e?: React.MouseEvent) => {
      toggleModal(e, false)
    }

    useImperativeHandle(
      ref,
      () => ({
        modalId: id,
        modalIsOpen: isOpen,
        toggleModal,
      }),
      [id, isOpen]
    )

    useEffect(() => {
      const SCROLLBAR_WIDTH = getScrollbarWidth()
      const INITIAL_PADDING =
        window
          .getComputedStyle(document.body)
          .getPropertyValue('padding-right') || '0px'

      const TEMPORARY_PADDING = `${
        parseInt(INITIAL_PADDING.replace(/px/, ''), 10) +
        parseInt(SCROLLBAR_WIDTH.replace(/px/, ''), 10)
      }px`

      initialPaddingRef.current = INITIAL_PADDING
      tempPaddingRef.current = TEMPORARY_PADDING

      setMounted(true)

      return () => {
        // On unmount
        const { body } = document
        const INITIAL_PADDING = initialPaddingRef.current
        const TEMPORARY_PADDING = tempPaddingRef.current

        body.classList.remove('usa-js-modal--active')
        body.classList.remove('usa-js-no-click')

        body.style.paddingRight =
          (body.style.paddingRight === TEMPORARY_PADDING
            ? INITIAL_PADDING
            : TEMPORARY_PADDING) || ''

        document.querySelectorAll(NON_MODALS_HIDDEN).forEach((el) => {
          el.removeAttribute('aria-hidden')
          el.removeAttribute('data-modal-hidden')
        })
      }
    }, [])

    useEffect(() => {
      if (mounted) {
        const { body } = document

        const INITIAL_PADDING = initialPaddingRef.current
        const TEMPORARY_PADDING = tempPaddingRef.current

        body.style.paddingRight =
          (body.style.paddingRight === TEMPORARY_PADDING
            ? INITIAL_PADDING
            : TEMPORARY_PADDING) || ''

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
    }, [isOpen])

    const ariaLabelledBy = divProps['aria-labelledby']
    const ariaDescribedBy = divProps['aria-describedby']

    delete divProps['aria-labelledby']
    delete divProps['aria-describedby']

    const initialFocus = () => {
      const focusEl = modalEl.current?.querySelector('[data-focus]') as
        | HTMLElement
        | SVGElement

      return focusEl ? focusEl : modalEl.current || false
    }

    const focusTrapOptions = {
      initialFocus,
      escapeDeactivates: (): boolean => {
        if (forceAction) return false

        closeModal()
        return true
      },
    }

    return (
      <FocusTrap active={isOpen} focusTrapOptions={focusTrapOptions}>
        <ModalWrapper
          role="dialog"
          id={id}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          data-force-action={forceAction}
          isVisible={isOpen}
          handleClose={closeModal}
          forceAction={forceAction}>
          <ModalWindow
            modalId={id}
            {...divProps}
            ref={modalEl}
            isLarge={isLarge}
            forceAction={forceAction}
            tabIndex={-1}
            handleClose={closeModal}>
            {children}
          </ModalWindow>
        </ModalWrapper>
      </FocusTrap>
    )
  }
)

Modal.displayName = 'Modal'

export default Modal

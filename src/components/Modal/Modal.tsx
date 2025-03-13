import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  JSX,
} from 'react'
import FocusTrap from 'focus-trap-react'

import { useModal, getScrollbarWidth } from './utils'
import { ModalWindow } from './ModalWindow/ModalWindow'
import { ModalWrapper } from './ModalWrapper/ModalWrapper'
import ReactDOM from 'react-dom'

interface ModalComponentProps {
  id: string
  children: React.ReactNode
  className?: string
  isLarge?: boolean
  forceAction?: boolean
  modalRoot?: string
  renderToPortal?: boolean
  isInitiallyOpen?: boolean
}

export type ModalProps = ModalComponentProps & JSX.IntrinsicElements['div']

export type ModalRef = {
  modalId: string
  modalIsOpen: boolean
  toggleModal: (event?: React.MouseEvent, open?: boolean) => boolean
}

// Modals are rendered into the document body default. If an element exists with the id
// `modal-root`, that element will be used as the parent instead.
//
// If you wish to override this behavior, `renderToPortal` to `false` and the modal
// will render in its normal location in the document. Note that this may cause the modal to
// be inaccessible due to no longer being in the document's accessibility tree.
export const ModalForwardRef: React.ForwardRefRenderFunction<
  ModalRef,
  ModalProps
> = (
  {
    id,
    children,
    isLarge = false,
    forceAction = false,
    modalRoot = '.usa-modal-wrapper',
    renderToPortal = true,
    isInitiallyOpen,
    ...divProps
  },
  ref
): JSX.Element => {
  const { isOpen, toggleModal } = useModal(isInitiallyOpen)
  const [mounted, setMounted] = useState(false)
  const initialPaddingRef = useRef<string>(undefined)
  const tempPaddingRef = useRef<string>(undefined)
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

  const handleOpenEffect = () => {
    const { body } = document
    body.style.paddingRight = tempPaddingRef.current || ''
    body.classList.add('usa-js-modal--active')

    document.querySelectorAll(NON_MODALS).forEach((el) => {
      el.setAttribute('aria-hidden', 'true')
      el.setAttribute('data-modal-hidden', '')
    })

    if (forceAction) {
      body.classList.add('usa-js-no-click')
    }
  }

  const handleCloseEffect = () => {
    const { body } = document
    body.style.paddingRight = initialPaddingRef.current || ''
    body.classList.remove('usa-js-modal--active')
    body.classList.remove('usa-js-no-click')

    document.querySelectorAll(NON_MODALS_HIDDEN).forEach((el) => {
      el.removeAttribute('aria-hidden')
      el.removeAttribute('data-modal-hidden')
    })
  }

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
      // Reset as if the modal is being closed
      handleCloseEffect()
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      if (isOpen === true) {
        handleOpenEffect()
      } else if (isOpen === false) {
        handleCloseEffect()
      }
    }
  }, [isOpen])

  const ariaLabelledBy = divProps['aria-labelledby']
  const ariaDescribedBy = divProps['aria-describedby']

  if (!ariaLabelledBy) {
    console.error(`${id} is missing aria-labelledby attribute`)
  }
  if (!ariaDescribedBy) {
    console.error(`${id} is missing aria-describedby attribute`)
  }

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

  const modal = (
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

  if (renderToPortal) {
    const modalRoot = document.getElementById('modal-root')
    const target = modalRoot || document.body
    return ReactDOM.createPortal(modal, target)
  } else {
    return modal
  }
}

export const Modal = forwardRef(ModalForwardRef)

export default Modal

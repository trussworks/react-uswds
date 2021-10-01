import { useState } from 'react'

export type ModalHook = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useModal = (): ModalHook => {
  const [isOpen, setIsOpen] = useState(false)

  // TODO - set opener element to return focus to
  // TODO - useEffect on body element

  const openModal = (): void => setIsOpen(true)
  const closeModal = (): void => setIsOpen(false)

  return { isOpen, openModal, closeModal }
}

export const getScrollbarWidth = (): string => {
  // Only run in browser
  if (typeof document !== undefined) {
    const outer = document.createElement('div')

    outer.setAttribute(
      'style',
      'visibility: hidden; overflow: scroll; ms-overflow-style: scrollbar'
    )

    document.body.appendChild(outer)

    const inner = document.createElement('div')
    outer.appendChild(inner)

    const scrollbarWidth = `${outer.offsetWidth - inner.offsetWidth}px`
    outer.parentNode?.removeChild(outer)

    return scrollbarWidth
  }

  return ''
}

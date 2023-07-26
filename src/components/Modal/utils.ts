import React, { useState } from 'react'

export type ModalHook = {
  isOpen: boolean
  toggleModal: (e?: React.MouseEvent, open?: boolean) => boolean
}

export const useModal = (isInitiallyOpen?: boolean): ModalHook => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen || false)

  const allowToggle = (e: React.MouseEvent): boolean => {
    const clickedElement = e.target as Element

    if (e && clickedElement) {
      if (clickedElement.closest('.usa-modal')) {
        // Element is inside a modal

        // Only allow toggle if element is a close button, don't allow opening a modal from with a modal
        return (
          clickedElement.hasAttribute('[data-close-modal]') ||
          !!clickedElement.closest('[data-close-modal]')
        )
      }
    }

    return true
  }

  const toggleModal = (e?: React.MouseEvent, open?: boolean): boolean => {
    if (e && !allowToggle(e)) {
      e.stopPropagation()
      return false
    }

    if (open === true) setIsOpen(true)
    else if (open === false) setIsOpen(false)
    else {
      setIsOpen((state) => !state)
    }

    return true
  }

  return { isOpen, toggleModal }
}

export const getScrollbarWidth = (): string => {
  // Only run in browser
  if (typeof document !== 'undefined') {
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

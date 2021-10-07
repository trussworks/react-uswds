import React, { useState } from 'react'

export type ModalHook = {
  isOpen: boolean
  toggleModal: (e?: React.MouseEvent, open?: boolean) => boolean
}

export const useModal = (): ModalHook => {
  const [isOpen, setIsOpen] = useState(false)

  const allowToggle = (e: React.MouseEvent): boolean => {
    const clickedElement = e.target as Element

    if (e && clickedElement) {
      if (clickedElement.closest('.usa-modal')) {
        // Element is inside a modal
        if (
          clickedElement.hasAttribute('[data-close-modal]') ||
          clickedElement.closest('[data-close-modal]')
        ) {
          // Element is a close button - proceed
          return true
        } else {
          // Don't allow opening a modal from within a modal
          return false
        }
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

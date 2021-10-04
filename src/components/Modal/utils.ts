import React, { useState } from 'react'

export type ModalHook = {
  isOpen: boolean
  openModal: (e?: React.MouseEvent) => boolean
  closeModal: () => void
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

  const openModal = (e?: React.MouseEvent): boolean => {
    if (e && !allowToggle(e)) {
      e.stopPropagation()
      return false
    }

    setIsOpen(true)
    return true
  }

  const closeModal = (e?: React.MouseEvent): boolean => {
    if (e && !allowToggle(e)) {
      e.stopPropagation()
      return false
    }

    setIsOpen(false)
    return true
  }

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

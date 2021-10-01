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

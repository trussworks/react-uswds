import React from 'react'
import { render, screen } from '@testing-library/react'

import { ModalRef } from './Modal'
import { ModalToggleButton } from './ModalToggleButton'
import { userEvent } from '@testing-library/user-event'

describe('ModalToggleButton', () => {
  it('renders a button with the modal control attributes', () => {
    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: vi.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef | null> = {
      current: mockRef,
    }

    render(
      <ModalToggleButton modalRef={modalRef}>Open modal</ModalToggleButton>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('aria-controls', mockRef.modalId)
    expect(button).toHaveAttribute('data-open-modal')
    expect(button).toHaveAttribute('data-close-modal')
  })

  it('throws an error if clicked when the modal ref is null', async () => {
    const consoleSpy = vi.spyOn(console, 'error')

    const modalRef: React.RefObject<ModalRef | null> = {
      current: null,
    }

    render(
      <ModalToggleButton modalRef={modalRef}>Open modal</ModalToggleButton>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    await userEvent.click(button)
    expect(consoleSpy).toHaveBeenCalledWith('ModalRef is required')
  })

  it('toggles the modal when clicked', async () => {
    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: vi.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef | null> = {
      current: mockRef,
    }

    render(
      <ModalToggleButton modalRef={modalRef}>Open modal</ModalToggleButton>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    await userEvent.click(button)
    expect(mockRef.toggleModal).toHaveBeenCalled()
  })

  describe('if an opener', () => {
    it('has the opener attribute', () => {
      const mockRef: ModalRef = {
        modalIsOpen: false,
        modalId: 'testModal',
        toggleModal: vi.fn().mockReturnValue(true),
      }

      const modalRef: React.RefObject<ModalRef | null> = {
        current: mockRef,
      }

      render(
        <ModalToggleButton modalRef={modalRef} opener>
          Open modal
        </ModalToggleButton>
      )

      const button = screen.getByRole('button', { name: 'Open modal' })
      expect(button).toHaveAttribute('data-open-modal')
      expect(button).not.toHaveAttribute('data-close-modal')
    })

    it('opens the modal when clicked', async () => {
      const mockRef: ModalRef = {
        modalIsOpen: false,
        modalId: 'testModal',
        toggleModal: vi.fn().mockReturnValue(true),
      }

      const modalRef: React.RefObject<ModalRef | null> = {
        current: mockRef,
      }

      const handleClick = vi.fn()

      render(
        <ModalToggleButton modalRef={modalRef} opener onClick={handleClick}>
          Open modal
        </ModalToggleButton>
      )

      const button = screen.getByRole('button', { name: 'Open modal' })
      await userEvent.click(button)
      expect(mockRef.toggleModal).toHaveBeenCalledWith(expect.anything(), true)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('if a closer', () => {
    it('has the closer attribute', () => {
      const mockRef: ModalRef = {
        modalIsOpen: false,
        modalId: 'testModal',
        toggleModal: vi.fn().mockReturnValue(true),
      }

      const modalRef: React.RefObject<ModalRef | null> = {
        current: mockRef,
      }

      render(
        <ModalToggleButton modalRef={modalRef} closer>
          Close modal
        </ModalToggleButton>
      )

      const button = screen.getByRole('button', { name: 'Close modal' })
      expect(button).toHaveAttribute('data-close-modal')
      expect(button).not.toHaveAttribute('data-open-modal')
    })

    it('closes the modal when clicked', async () => {
      const mockRef: ModalRef = {
        modalIsOpen: false,
        modalId: 'testModal',
        toggleModal: vi.fn().mockReturnValue(true),
      }

      const modalRef: React.RefObject<ModalRef | null> = {
        current: mockRef,
      }

      const handleClick = vi.fn()

      render(
        <ModalToggleButton modalRef={modalRef} closer onClick={handleClick}>
          Close modal
        </ModalToggleButton>
      )

      const button = screen.getByRole('button', { name: 'Close modal' })
      await userEvent.click(button)
      expect(mockRef.toggleModal).toHaveBeenCalledWith(expect.anything(), false)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})

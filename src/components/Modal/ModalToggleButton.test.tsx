import React from 'react'
import { render, screen } from '@testing-library/react'

import { ModalRef } from './Modal'
import { ModalToggleButton } from './ModalToggleButton'
import userEvent from '@testing-library/user-event'

describe('ModalToggleButton', () => {
  it('renders a button with the modal control attributes', () => {
    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: jest.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef> = {
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

  it('throws an error if clicked when the modal ref is null', () => {
    const consoleSpy = jest.spyOn(console, 'error')

    const modalRef: React.RefObject<ModalRef> = {
      current: null,
    }

    render(
      <ModalToggleButton modalRef={modalRef}>Open modal</ModalToggleButton>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    userEvent.click(button)
    expect(consoleSpy).toHaveBeenCalledWith('ModalRef is required')
  })

  it('toggles the modal when clicked', () => {
    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: jest.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef> = {
      current: mockRef,
    }

    render(
      <ModalToggleButton modalRef={modalRef}>Open modal</ModalToggleButton>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    userEvent.click(button)
    expect(mockRef.toggleModal).toHaveBeenCalled()
  })

  describe('if an opener', () => {
    it('has the opener attribute', () => {
      const mockRef: ModalRef = {
        modalIsOpen: false,
        modalId: 'testModal',
        toggleModal: jest.fn().mockReturnValue(true),
      }

      const modalRef: React.RefObject<ModalRef> = {
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

    it('opens the modal when clicked', () => {
      const mockRef: ModalRef = {
        modalIsOpen: false,
        modalId: 'testModal',
        toggleModal: jest.fn().mockReturnValue(true),
      }

      const modalRef: React.RefObject<ModalRef> = {
        current: mockRef,
      }

      render(
        <ModalToggleButton modalRef={modalRef} opener>
          Open modal
        </ModalToggleButton>
      )

      const button = screen.getByRole('button', { name: 'Open modal' })
      userEvent.click(button)
      expect(mockRef.toggleModal).toHaveBeenCalledWith(expect.anything(), true)
    })
  })

  describe('if a closer', () => {
    it('has the closer attribute', () => {
      const mockRef: ModalRef = {
        modalIsOpen: false,
        modalId: 'testModal',
        toggleModal: jest.fn().mockReturnValue(true),
      }

      const modalRef: React.RefObject<ModalRef> = {
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

    it('closes the modal when clicked', () => {
      const mockRef: ModalRef = {
        modalIsOpen: false,
        modalId: 'testModal',
        toggleModal: jest.fn().mockReturnValue(true),
      }

      const modalRef: React.RefObject<ModalRef> = {
        current: mockRef,
      }

      render(
        <ModalToggleButton modalRef={modalRef} closer>
          Close modal
        </ModalToggleButton>
      )

      const button = screen.getByRole('button', { name: 'Close modal' })
      userEvent.click(button)
      expect(mockRef.toggleModal).toHaveBeenCalledWith(expect.anything(), false)
    })
  })
})

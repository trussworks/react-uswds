import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Modal } from './Modal'

describe('Modal component', () => {
  it('renders its children inside a modal wrapper', () => {
    const modalState = {
      isOpen: false,
      closeModal: jest.fn(),
    }

    const testModalId = 'testModal'

    render(
      <Modal id={testModalId} {...modalState}>
        Test modal
      </Modal>
    )

    // Modal wrapper
    const modalWrapper = screen.getByRole('dialog')
    expect(modalWrapper).toHaveAttribute('id', testModalId)
    expect(modalWrapper).toHaveClass('usa-modal-wrapper')
    expect(modalWrapper).toHaveClass('is-hidden')
    expect(modalWrapper).not.toHaveClass('is-visible')

    expect(screen.queryByTestId('modalOverlay')).toBeInTheDocument()

    const modalWindow = screen.getByTestId('modalWindow')
    expect(modalWindow).toHaveClass('usa-modal')
    expect(modalWindow).not.toHaveAttribute('id')
    expect(modalWindow).toHaveAttribute('tabindex', '-1')
    expect(modalWindow).toHaveTextContent('Test modal')

    const closeButton = screen.getByRole('button', {
      name: 'Close this window',
    })
    expect(closeButton).toBeInTheDocument()
    userEvent.click(closeButton)
    expect(modalState.closeModal).toHaveBeenCalled()
  })

  it('passes aria props to the modal wrapper', () => {
    const modalState = {
      isOpen: false,
      closeModal: jest.fn(),
    }

    const testModalId = 'testModal'

    render(
      <Modal
        id={testModalId}
        {...modalState}
        aria-labelledby="modal-label"
        aria-describedby="modal-description">
        Test modal
      </Modal>
    )

    const modalWrapper = screen.getByRole('dialog')
    expect(modalWrapper).toHaveAttribute('aria-labelledby', 'modal-label')
    expect(modalWrapper).toHaveAttribute(
      'aria-describedby',
      'modal-description'
    )

    const modalWindow = screen.getByTestId('modalWindow')
    expect(modalWindow).not.toHaveAttribute('aria-labelledby')
    expect(modalWindow).not.toHaveAttribute('aria-describedby')
  })

  it('renders the visible state when open', () => {
    const modalState = {
      isOpen: true,
      closeModal: jest.fn(),
    }

    const testModalId = 'testModal'

    render(
      <Modal id={testModalId} {...modalState}>
        Test modal
      </Modal>
    )

    const modalWrapper = screen.getByRole('dialog')
    expect(modalWrapper).not.toHaveClass('is-hidden')
    expect(modalWrapper).toHaveClass('is-visible')
  })

  it('renders a large modalWindow isLarge is true', () => {
    const modalState = {
      isOpen: false,
      closeModal: jest.fn(),
    }

    const testModalId = 'testModal'

    render(
      <Modal id={testModalId} {...modalState} isLarge>
        Test modal
      </Modal>
    )

    expect(screen.getByTestId('modalWindow')).toHaveClass('usa-modal--lg')
  })

  it('does not render a close button when forceAction is true', () => {
    const modalState = {
      isOpen: false,
      closeModal: jest.fn(),
    }

    const testModalId = 'testModal'

    render(
      <Modal id={testModalId} {...modalState} forceAction>
        Test modal
      </Modal>
    )

    expect(screen.getByRole('dialog')).toHaveAttribute(
      'data-force-action',
      'true'
    )

    expect(
      screen.queryByRole('button', {
        name: 'Close this window',
      })
    ).not.toBeInTheDocument()
  })
})

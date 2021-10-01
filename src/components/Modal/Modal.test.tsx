import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Modal } from './Modal'
import { getScrollbarWidth } from './utils'

jest.mock('./utils')

const mockedGetScrollbarWidth = getScrollbarWidth as jest.MockedFunction<
  typeof getScrollbarWidth
>
mockedGetScrollbarWidth.mockReturnValue('15px')

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

  describe('toggling', () => {
    it('styles the body element', () => {
      const closeModal = jest.fn()
      const { rerender, baseElement } = render(
        <Modal id="testModal" isOpen={false} closeModal={closeModal}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).not.toHaveStyle('padding-right: 0px')

      rerender(
        <Modal id="testModal" isOpen={true} closeModal={closeModal}>
          Test modal
        </Modal>
      )

      expect(baseElement).toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 15px')

      rerender(
        <Modal id="testModal" isOpen={false} closeModal={closeModal}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 0px')
    })

    it('styles the body element when it already has padding right', () => {
      const closeModal = jest.fn()
      document.body.style.paddingRight = '20px'

      const { rerender, baseElement } = render(
        <Modal id="testModal" isOpen={false} closeModal={closeModal}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 20px')

      rerender(
        <Modal id="testModal" isOpen={true} closeModal={closeModal}>
          Test modal
        </Modal>
      )

      expect(baseElement).toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 35px')

      rerender(
        <Modal id="testModal" isOpen={false} closeModal={closeModal}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 20px')
    })

    it('hides other elements from screen readers', () => {
      const modalProps = {
        id: 'testModal',
        closeModal: jest.fn(),
      }
      const { rerender } = render(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <Modal {...modalProps} isOpen={false}>
            Test modal
          </Modal>
        </>,
        {
          container: document.body,
        }
      )

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute(
        'data-modal-hidden'
      )

      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      rerender(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <Modal {...modalProps} isOpen={true}>
            Test modal
          </Modal>
        </>
      )

      expect(screen.getByTestId('nonhidden')).toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).toHaveAttribute(
        'data-modal-hidden'
      )
      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      rerender(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <Modal {...modalProps} isOpen={false}>
            Test modal
          </Modal>
        </>
      )

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute(
        'data-modal-hidden'
      )

      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')
    })

    it('hides other elements from screen readers with a custom modal root', () => {
      const modalProps = {
        id: 'testModal',
        closeModal: jest.fn(),
        modalRoot: '#modal-root',
      }

      const { rerender } = render(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <div id="#modal-root">
            <Modal {...modalProps} isOpen={false}>
              Test modal
            </Modal>
          </div>
        </>,
        {
          container: document.body,
        }
      )

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute(
        'data-modal-hidden'
      )

      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      rerender(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <div id="#modal-root">
            <Modal {...modalProps} isOpen={true}>
              Test modal
            </Modal>
          </div>
        </>
      )

      expect(screen.getByTestId('nonhidden')).toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).toHaveAttribute(
        'data-modal-hidden'
      )
      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      rerender(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <div id="#modal-root">
            <Modal {...modalProps} isOpen={false}>
              Test modal
            </Modal>
          </div>
        </>
      )

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute(
        'data-modal-hidden'
      )

      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')
    })

    describe('if forceAction is true', () => {
      it('styles the body element', () => {
        const closeModal = jest.fn()
        const { rerender, baseElement } = render(
          <Modal
            id="testModal"
            isOpen={false}
            closeModal={closeModal}
            forceAction>
            Test modal
          </Modal>
        )

        expect(baseElement).not.toHaveClass('usa-js-no-click')

        rerender(
          <Modal
            id="testModal"
            isOpen={true}
            closeModal={closeModal}
            forceAction>
            Test modal
          </Modal>
        )

        expect(baseElement).toHaveClass('usa-js-no-click')

        rerender(
          <Modal
            id="testModal"
            isOpen={false}
            closeModal={closeModal}
            forceAction>
            Test modal
          </Modal>
        )

        expect(baseElement).not.toHaveClass('usa-js-no-click')
      })
    })
  })
})

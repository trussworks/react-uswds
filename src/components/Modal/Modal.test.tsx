import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderHook } from '@testing-library/react-hooks'

import { Modal } from './Modal'
import { useModal } from './utils'
import { ModalHeading } from './ModalHeading/ModalHeading'
import { ModalFooter } from './ModalFooter/ModalFooter'
import { ModalOpenButton } from './ModalOpenButton'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

jest.mock('./utils', () => {
  const utils = jest.requireActual('./utils')

  return {
    __esModule: true,
    ...utils,
    getScrollbarWidth: jest.fn().mockReturnValue('15px'),
  }
})

const ExampleModal = ({
  forceAction = false,
}: {
  forceAction?: boolean
}): React.ReactElement => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <ModalOpenButton
        handleOpen={openModal}
        href="#example-modal-1"
        aria-controls="example-modal-1"
        onClick={(e) => e.preventDefault()}>
        Open default modal
      </ModalOpenButton>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        id="example-modal-1"
        aria-labelledby="modal-1-heading"
        aria-describedby="modal-1-description"
        forceAction={forceAction}>
        <ModalHeading id="modal-1-heading">
          Are you sure you want to continue?
        </ModalHeading>
        <div className="usa-prose">
          <p id="modal-1-description">
            You have unsaved changes that will be lost.
          </p>
        </div>
        <ModalFooter>
          <ButtonGroup>
            <Button type="button" data-close-modal onClick={closeModal}>
              Continue without saving
            </Button>
            <Button
              type="button"
              data-close-modal
              unstyled
              className="padding-105 text-center"
              onClick={closeModal}>
              Go back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

const ExampleModalWithFocusElement = (): React.ReactElement => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <ModalOpenButton
        handleOpen={openModal}
        href="#example-modal-1"
        aria-controls="example-modal-1"
        onClick={(e) => e.preventDefault()}>
        Open default modal
      </ModalOpenButton>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        id="example-modal-1"
        aria-labelledby="modal-1-heading"
        aria-describedby="modal-1-description">
        <ModalHeading id="modal-1-heading">
          Are you sure you want to continue?
        </ModalHeading>
        <div className="usa-prose">
          <p id="modal-1-description">
            You have unsaved changes that will be lost.
          </p>
          <button type="button" data-focus="true">
            Focus me first
          </button>
        </div>
        <ModalFooter>
          <ButtonGroup>
            <Button type="button" data-close-modal onClick={closeModal}>
              Continue without saving
            </Button>
            <Button
              type="button"
              data-close-modal
              unstyled
              className="padding-105 text-center"
              onClick={closeModal}>
              Go back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

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

    expect(
      screen.getByRole('button', {
        name: 'Close this window',
      })
    ).toBeInTheDocument()
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

  it('can click on the close button to close', () => {
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

    const closeButton = screen.getByRole('button', {
      name: 'Close this window',
    })
    expect(closeButton).toBeInTheDocument()
    userEvent.click(closeButton)
    expect(modalState.closeModal).toHaveBeenCalled()
  })

  it('can click on the overlay to close', () => {
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

    const overlay = screen.getByTestId('modalOverlay')
    userEvent.click(overlay)
    expect(modalState.closeModal).toHaveBeenCalled()
  })

  it('renders a large modal window when isLarge is true', () => {
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

    it('stops event propagation if toggle modal is called from within a modal', () => {
      const { result } = renderHook(() => useModal())

      const closeSpy = jest.spyOn(result.current, 'closeModal')

      const testModalId = 'testModal'

      render(
        <Modal id={testModalId} {...result.current}>
          Test modal
        </Modal>
      )

      userEvent.click(screen.getByText('Test modal'))
      expect(closeSpy).toHaveLastReturnedWith(false)
    })

    describe('focusing', () => {
      it('activates a focus trap', async () => {
        render(<ExampleModal />, {
          container: document.body,
        })

        const openButton = screen.getByRole('button', {
          name: 'Open default modal',
        })

        userEvent.click(openButton)

        await waitFor(() => {
          expect(screen.getByRole('dialog')).toHaveClass('is-visible')
          expect(screen.getByTestId('modalWindow')).toHaveFocus()
        })

        userEvent.tab()
        expect(
          screen.getByRole('button', { name: 'Continue without saving' })
        ).toHaveFocus()

        userEvent.tab()
        expect(screen.getByRole('button', { name: 'Go back' })).toHaveFocus()

        userEvent.tab()
        expect(
          screen.getByRole('button', { name: 'Close this window' })
        ).toHaveFocus()

        userEvent.tab()
        expect(
          screen.getByRole('button', { name: 'Continue without saving' })
        ).toHaveFocus()
      })

      it('returns focus to the opener element on close', async () => {
        render(<ExampleModal />, {
          container: document.body,
        })

        const openButton = screen.getByRole('button', {
          name: 'Open default modal',
        })

        userEvent.click(openButton)

        await waitFor(() => {
          expect(screen.getByRole('dialog')).toHaveClass('is-visible')
          expect(screen.getByTestId('modalWindow')).toHaveFocus()
        })

        userEvent.tab()
        expect(
          screen.getByRole('button', {
            name: 'Continue without saving',
          })
        ).toHaveFocus()

        userEvent.click(
          screen.getByRole('button', { name: 'Close this window' })
        )

        expect(
          screen.getByRole('button', {
            name: 'Open default modal',
          })
        ).toHaveFocus()
      })

      it('the escape key closes the modal', async () => {
        render(<ExampleModal />, {
          container: document.body,
        })

        const openButton = screen.getByRole('button', {
          name: 'Open default modal',
        })

        userEvent.click(openButton)

        await waitFor(() => {
          expect(screen.getByRole('dialog')).toHaveClass('is-visible')
          expect(screen.getByTestId('modalWindow')).toHaveFocus()
        })

        fireEvent.keyDown(screen.getByTestId('modalWindow'), { key: 'Escape' })

        await waitFor(() => {
          expect(screen.getByRole('dialog')).not.toHaveClass('is-visible')

          expect(
            screen.getByRole('button', {
              name: 'Open default modal',
            })
          ).toHaveFocus()
        })
      })

      it('can pass in a custom onFocus element', async () => {
        render(<ExampleModalWithFocusElement />, {
          container: document.body,
        })

        const openButton = screen.getByRole('button', {
          name: 'Open default modal',
        })

        userEvent.click(openButton)

        await waitFor(() => {
          expect(screen.getByRole('dialog')).toHaveClass('is-visible')
          expect(
            screen.getByRole('button', { name: 'Focus me first' })
          ).toHaveFocus()
        })
      })
    })

    describe('if forceAction is true', () => {
      const testModalChildren = (
        <div>
          <p>Test modal</p>
          <a href="#test">Focus target</a>
        </div>
      )

      it('styles the body element', () => {
        const closeModal = jest.fn()
        const { rerender, baseElement } = render(
          <Modal
            id="testModal"
            isOpen={false}
            closeModal={closeModal}
            forceAction>
            {testModalChildren}
          </Modal>
        )

        expect(baseElement).not.toHaveClass('usa-js-no-click')

        rerender(
          <Modal
            id="testModal"
            isOpen={true}
            closeModal={closeModal}
            forceAction>
            {testModalChildren}
          </Modal>
        )

        expect(baseElement).toHaveClass('usa-js-no-click')

        rerender(
          <Modal
            id="testModal"
            isOpen={false}
            closeModal={closeModal}
            forceAction>
            {testModalChildren}
          </Modal>
        )

        expect(baseElement).not.toHaveClass('usa-js-no-click')
      })

      it('cannot click on the overlay to close', () => {
        const modalState = {
          isOpen: true,
          closeModal: jest.fn(),
        }

        const testModalId = 'testModal'

        render(
          <Modal id={testModalId} {...modalState} forceAction>
            {testModalChildren}
          </Modal>
        )

        const overlay = screen.getByTestId('modalOverlay')
        userEvent.click(overlay)
        expect(modalState.closeModal).not.toHaveBeenCalled()
      })

      it('the escape key does not close the modal', async () => {
        render(<ExampleModal forceAction />, {
          container: document.body,
        })

        const openButton = screen.getByRole('button', {
          name: 'Open default modal',
        })

        userEvent.click(openButton)

        await waitFor(() => {
          expect(screen.getByRole('dialog')).toHaveClass('is-visible')
          expect(screen.getByTestId('modalWindow')).toHaveFocus()
        })

        fireEvent.keyDown(screen.getByTestId('modalWindow'), { key: 'Escape' })

        await waitFor(() => {
          expect(screen.getByRole('dialog')).toHaveClass('is-visible')
          expect(screen.getByTestId('modalWindow')).toHaveFocus()
        })
      })
    })
  })
})

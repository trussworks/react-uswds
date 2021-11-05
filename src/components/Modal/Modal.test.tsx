import React, { createRef, useRef } from 'react'
import {
  render,
  screen,
  waitFor,
  fireEvent,
  RenderOptions,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Modal, ModalRef } from './Modal'
import { ModalHeading } from './ModalHeading/ModalHeading'
import { ModalFooter } from './ModalFooter/ModalFooter'
import { ModalToggleButton } from './ModalToggleButton'
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

const renderWithModalRoot = (
  ui: React.ReactElement,
  options: RenderOptions = {}
) => {
  const modalContainer = document.createElement('div')
  modalContainer.setAttribute('id', 'modal-root')

  return render(ui, {
    ...options,
    container: document.body.appendChild(modalContainer),
  })
}

const ExampleModal = ({
  forceAction = false,
}: {
  forceAction?: boolean
}): React.ReactElement => {
  const modalRef = useRef<ModalRef>(null)

  return (
    <>
      <ModalToggleButton modalRef={modalRef} opener>
        Open default modal
      </ModalToggleButton>
      <Modal
        ref={modalRef}
        id="example-modal-1"
        aria-labelledby="modal-1-heading"
        aria-describedby="modal-1-description"
        forceAction={forceAction}
        modalRoot="#modal-root">
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
            <Button
              type="button"
              data-close-modal
              onClick={(e) => modalRef.current?.toggleModal(e, false)}>
              Continue without saving
            </Button>
            <Button
              type="button"
              data-close-modal
              unstyled
              className="padding-105 text-center"
              onClick={(e) => modalRef.current?.toggleModal(e, false)}>
              Go back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

const ExampleModalWithFocusElement = (): React.ReactElement => {
  const modalRef = useRef<ModalRef>(null)

  return (
    <>
      <ModalToggleButton modalRef={modalRef} opener>
        Open default modal
      </ModalToggleButton>
      <Modal
        ref={modalRef}
        id="example-modal-1"
        aria-labelledby="modal-1-heading"
        aria-describedby="modal-1-description"
        modalRoot="#modal-root">
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
            <Button
              type="button"
              data-close-modal
              onClick={(e) => modalRef.current?.toggleModal(e, false)}>
              Continue without saving
            </Button>
            <Button
              type="button"
              data-close-modal
              unstyled
              className="padding-105 text-center"
              onClick={(e) => modalRef.current?.toggleModal(e, false)}>
              Go back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

describe('Modal component', () => {
  beforeEach(() => {
    document.body.style.paddingRight = '0px'
  })

  it('renders its children inside a modal wrapper', () => {
    const testModalId = 'testModal'

    render(<Modal id={testModalId}>Test modal</Modal>)

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
    const testModalId = 'testModal'

    render(
      <Modal
        id={testModalId}
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

  it('renders the visible state when open', async () => {
    const modalRef = createRef<ModalRef>()
    const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

    const testModalId = 'testModal'

    renderWithModalRoot(
      <Modal id={testModalId} ref={modalRef} modalRoot="#modal-root">
        Test modal
      </Modal>
    )

    await waitFor(() => handleOpen())

    expect(modalRef.current?.modalIsOpen).toBe(true)
    const modalWrapper = screen.getByRole('dialog')
    expect(modalWrapper).not.toHaveClass('is-hidden')
    expect(modalWrapper).toHaveClass('is-visible')
  })

  it('can click on the close button to close', async () => {
    const testModalId = 'testModal'
    const modalRef = createRef<ModalRef>()
    const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

    renderWithModalRoot(
      <Modal id={testModalId} ref={modalRef} modalRoot="#modal-root">
        Test modal
      </Modal>
    )

    await waitFor(() => handleOpen())

    expect(modalRef.current?.modalIsOpen).toBe(true)
    const closeButton = screen.getByRole('button', {
      name: 'Close this window',
    })
    expect(closeButton).toBeInTheDocument()
    userEvent.click(closeButton)
    expect(modalRef.current?.modalIsOpen).toBe(false)
  })

  it('can click on the overlay to close', async () => {
    const testModalId = 'testModal'
    const modalRef = createRef<ModalRef>()
    const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

    render(
      <Modal id={testModalId} ref={modalRef}>
        Test modal
      </Modal>
    )

    await waitFor(() => handleOpen())

    expect(modalRef.current?.modalIsOpen).toBe(true)
    const overlay = screen.getByTestId('modalOverlay')
    userEvent.click(overlay)
    expect(modalRef.current?.modalIsOpen).toBe(false)
  })

  it('renders a large modal window when isLarge is true', () => {
    const testModalId = 'testModal'

    render(
      <Modal id={testModalId} isLarge>
        Test modal
      </Modal>
    )

    expect(screen.getByTestId('modalWindow')).toHaveClass('usa-modal--lg')
  })

  it('does not render a close button when forceAction is true', () => {
    const testModalId = 'testModal'

    render(
      <Modal id={testModalId} forceAction>
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
    it('styles the body element', async () => {
      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)
      const handleClose = () => modalRef.current?.toggleModal(undefined, false)

      const { baseElement } = render(
        <Modal id="testModal" ref={modalRef}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 0px')

      await waitFor(() => handleOpen())

      expect(baseElement).toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 15px')

      await waitFor(() => handleClose())

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 0px')
    })

    it('styles the body element when it already has padding right', async () => {
      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)
      const handleClose = () => modalRef.current?.toggleModal(undefined, false)
      document.body.style.paddingRight = '20px'

      const { baseElement } = render(
        <Modal id="testModal" ref={modalRef}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 20px')

      await waitFor(() => handleOpen())

      expect(baseElement).toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 35px')

      await waitFor(() => handleClose())

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 20px')
    })

    it('hides other elements from screen readers', async () => {
      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)
      const handleClose = () => modalRef.current?.toggleModal(undefined, false)

      const modalProps = {
        ref: modalRef,
        id: 'testModal',
      }

      render(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <Modal {...modalProps}>Test modal</Modal>
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

      await waitFor(() => handleOpen())

      expect(screen.getByTestId('nonhidden')).toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).toHaveAttribute(
        'data-modal-hidden'
      )
      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      await waitFor(() => handleClose())

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute(
        'data-modal-hidden'
      )

      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')
    })

    it('hides other elements from screen readers with a custom modal root', async () => {
      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)
      const handleClose = () => modalRef.current?.toggleModal(undefined, false)

      const modalProps = {
        ref: modalRef,
        id: 'testModal',
        modalRoot: '#modal-root',
      }

      render(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <div id="#modal-root">
            <Modal {...modalProps}>Test modal</Modal>
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

      await waitFor(() => handleOpen())

      expect(screen.getByTestId('nonhidden')).toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).toHaveAttribute(
        'data-modal-hidden'
      )
      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      await waitFor(() => handleClose())

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute(
        'data-modal-hidden'
      )

      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')
    })

    it('stops event propagation if toggle modal is called from within a modal', async () => {
      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

      render(
        <Modal id="testModal" ref={modalRef}>
          Test modal
        </Modal>
      )

      expect(modalRef.current?.modalIsOpen).toBe(false)
      await waitFor(() => handleOpen())
      expect(modalRef.current?.modalIsOpen).toBe(true)
      userEvent.click(screen.getByText('Test modal'))
      expect(modalRef.current?.modalIsOpen).toBe(true)
    })

    describe('focusing', () => {
      it('activates a focus trap', async () => {
        renderWithModalRoot(<ExampleModal />)

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
        renderWithModalRoot(<ExampleModal />)

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
        renderWithModalRoot(<ExampleModal />)

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
        renderWithModalRoot(<ExampleModalWithFocusElement />)

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

      it('styles the body element', async () => {
        const modalRef = createRef<ModalRef>()
        const handleOpen = () => modalRef.current?.toggleModal(undefined, true)
        const handleClose = () =>
          modalRef.current?.toggleModal(undefined, false)

        const { baseElement } = render(
          <Modal id="testModal" ref={modalRef} forceAction>
            {testModalChildren}
          </Modal>
        )

        expect(baseElement).not.toHaveClass('usa-js-no-click')

        await waitFor(() => handleOpen())

        expect(baseElement).toHaveClass('usa-js-no-click')

        await waitFor(() => handleClose())

        expect(baseElement).not.toHaveClass('usa-js-no-click')
      })

      it('cannot click on the overlay to close', async () => {
        const modalRef = createRef<ModalRef>()
        const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

        const testModalId = 'testModal'

        render(
          <Modal id={testModalId} ref={modalRef} forceAction>
            {testModalChildren}
          </Modal>
        )

        await waitFor(() => handleOpen())
        expect(modalRef.current?.modalIsOpen).toBe(true)

        const overlay = screen.getByTestId('modalOverlay')
        userEvent.click(overlay)
        expect(modalRef.current?.modalIsOpen).toBe(true)
      })

      it('the escape key does not close the modal', async () => {
        renderWithModalRoot(<ExampleModal forceAction />)

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

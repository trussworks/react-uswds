import React, { type JSX, createRef, useRef } from 'react'
import {
  cleanup,
  render,
  screen,
  waitFor,
  RenderOptions,
} from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Modal, ModalRef } from './Modal'
import { ModalHeading } from './ModalHeading/ModalHeading'
import { ModalFooter } from './ModalFooter/ModalFooter'
import { ModalToggleButton } from './ModalToggleButton'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

vi.mock('./utils', async (importOriginal) => {
  const utils = await importOriginal<typeof import('./utils')>()

  return {
    ...utils,
    getScrollbarWidth: vi.fn().mockReturnValue('15px'),
  }
})

/*
 * Modal relies on focus-trap-react, which cannot be reliably tested
 * in JSDom. A __mocks__/focus-trap-react.tsx file ensures that a displayCheck setting
 * for the library is set so that tests do not fail due to this
 * incompatibility. See: https://github.com/focus-trap/tabbable#testing-in-jsdom
 */
const renderWithModalRoot = (ui: JSX.Element, options: RenderOptions = {}) => {
  const appContainer = document.createElement('div')
  appContainer.setAttribute('id', 'app-root')

  const modalContainer = document.createElement('div')
  modalContainer.setAttribute('id', 'modal-root')

  document.body.appendChild(appContainer)
  document.body.appendChild(modalContainer)

  const renderResult = render(ui, {
    ...options,
    container: appContainer,
    baseElement: document.body,
  })

  const modalWrapper = screen.getByRole('dialog')
  const modalWindow = screen.getByTestId('modalWindow')

  const queryForOpenButton = () =>
    screen.queryByRole('button', {
      name: 'Open default modal',
    })
  const queryForCloseButton = () =>
    screen.queryByRole('button', {
      name: 'Close this window',
    })
  const queryForOverlay = () => screen.queryByTestId('modalOverlay')

  return {
    ...renderResult,
    modalWrapper,
    modalWindow,
    queryForOpenButton,
    queryForCloseButton,
    queryForOverlay,
  }
}

const ExampleModal = ({
  forceAction = false,
}: {
  forceAction?: boolean
}): JSX.Element => {
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

const ExampleModalWithFocusElement = (): JSX.Element => {
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
    cleanup()
    document.body.innerHTML = ''
    document.body.style.paddingRight = '0px'
  })

  it('renders its children inside a modal wrapper', () => {
    const testModalId = 'testModal'

    const { modalWrapper, modalWindow, queryForCloseButton } =
      renderWithModalRoot(<Modal id={testModalId}>Test modal</Modal>)

    // Modal wrapper
    expect(modalWrapper).toHaveAttribute('id', testModalId)
    expect(modalWrapper).toHaveClass('usa-modal-wrapper')
    expect(modalWrapper).toHaveClass('is-hidden')
    expect(modalWrapper).not.toHaveClass('is-visible')

    expect(screen.queryByTestId('modalOverlay')).toBeInTheDocument()

    expect(modalWindow).toHaveClass('usa-modal')
    expect(modalWindow).not.toHaveAttribute('id')
    expect(modalWindow).toHaveAttribute('tabindex', '-1')
    expect(modalWindow).toHaveTextContent('Test modal')

    const closeButton = queryForCloseButton()
    expect(closeButton).toBeInTheDocument()
  })

  it('passes aria props to the modal wrapper', () => {
    const testModalId = 'testModal'

    const { modalWrapper, modalWindow } = renderWithModalRoot(
      <Modal
        id={testModalId}
        aria-labelledby="modal-label"
        aria-describedby="modal-description">
        Test modal
      </Modal>
    )

    expect(modalWrapper).toHaveAttribute('aria-labelledby', 'modal-label')
    expect(modalWrapper).toHaveAttribute(
      'aria-describedby',
      'modal-description'
    )

    expect(modalWindow).not.toHaveAttribute('aria-labelledby')
    expect(modalWindow).not.toHaveAttribute('aria-describedby')
  })

  it('throws an error if labelledby or describedby is undefined', () => {
    const consoleSpy = vi.spyOn(console, 'error')
    const testModalId = 'testModal'

    const { modalWrapper } = renderWithModalRoot(
      <Modal id={testModalId}>Test modal</Modal>
    )

    expect(modalWrapper).not.toHaveAttribute('aria-labelledby')
    expect(modalWrapper).not.toHaveAttribute('aria-describedby')
    expect(consoleSpy).toHaveBeenCalledWith(
      `${testModalId} is missing aria-labelledby attribute`
    )
    expect(consoleSpy).toHaveBeenCalledWith(
      `${testModalId} is missing aria-describedby attribute`
    )
  })

  it('renders the visible state when open', async () => {
    const modalRef = createRef<ModalRef>()
    const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

    const testModalId = 'testModal'

    const { modalWrapper } = renderWithModalRoot(
      <Modal id={testModalId} ref={modalRef} modalRoot="#modal-root">
        Test modal
      </Modal>
    )

    handleOpen()

    await waitFor(() => expect(modalRef.current?.modalIsOpen).toBe(true))

    expect(modalWrapper).not.toHaveClass('is-hidden')
    expect(modalWrapper).toHaveClass('is-visible')
  })

  it('can click on the close button to close', async () => {
    const user = userEvent.setup()

    const testModalId = 'testModal'
    const modalRef = createRef<ModalRef>()
    const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

    const { queryForCloseButton } = renderWithModalRoot(
      <Modal id={testModalId} ref={modalRef} modalRoot="#modal-root">
        Test modal
      </Modal>
    )

    handleOpen()

    await waitFor(() => expect(modalRef.current?.modalIsOpen).toBe(true))

    const closeButton = queryForCloseButton()
    expect(closeButton).toBeInTheDocument()

    await user.click(closeButton!)

    await waitFor(() => expect(modalRef.current?.modalIsOpen).toBe(false))
  })

  it('can click on the overlay to close', async () => {
    const user = userEvent.setup()

    const testModalId = 'testModal'
    const modalRef = createRef<ModalRef>()
    const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

    const { queryForOverlay } = renderWithModalRoot(
      <Modal id={testModalId} ref={modalRef}>
        Test modal
      </Modal>
    )

    handleOpen()

    await waitFor(() => expect(modalRef.current?.modalIsOpen).toBe(true))

    const overlay = queryForOverlay()
    expect(overlay).toBeInTheDocument()

    await user.click(overlay!)

    await waitFor(() => expect(modalRef.current?.modalIsOpen).toBe(false))
  })

  it('renders a large modal window when isLarge is true', () => {
    const testModalId = 'testModal'

    const { modalWindow } = renderWithModalRoot(
      <Modal id={testModalId} isLarge>
        Test modal
      </Modal>
    )

    expect(modalWindow).toHaveClass('usa-modal--lg')
  })

  it('renders modal initially open when isInitiallyOpen is true', () => {
    const modalRef = createRef<ModalRef>()

    const testModalId = 'testModal'

    renderWithModalRoot(
      <Modal id={testModalId} isInitiallyOpen={true} ref={modalRef}>
        Test modal
      </Modal>
    )

    expect(modalRef.current?.modalIsOpen).toBe(true)
  })

  it('does not render a close button when forceAction is true', () => {
    const testModalId = 'testModal'

    const { modalWrapper, queryForCloseButton } = renderWithModalRoot(
      <Modal id={testModalId} forceAction>
        Test modal
      </Modal>
    )

    expect(modalWrapper).toHaveAttribute('data-force-action', 'true')

    const closeButton = queryForCloseButton()
    expect(closeButton).not.toBeInTheDocument()
  })

  describe('toggling', () => {
    it('styles the body element', async () => {
      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)
      const handleClose = () => modalRef.current?.toggleModal(undefined, false)

      const { baseElement } = renderWithModalRoot(
        <Modal id="testModal" ref={modalRef}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 0px')

      handleOpen()

      await waitFor(() =>
        expect(baseElement).toHaveClass('usa-js-modal--active')
      )
      expect(baseElement).toHaveStyle('padding-right: 15px')

      handleClose()

      await waitFor(() =>
        expect(baseElement).not.toHaveClass('usa-js-modal--active')
      )
      expect(baseElement).toHaveStyle('padding-right: 0px')
    })

    it('styles the body element when it already has padding right', async () => {
      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)
      const handleClose = () => modalRef.current?.toggleModal(undefined, false)
      document.body.style.paddingRight = '20px'

      const { baseElement } = renderWithModalRoot(
        <Modal id="testModal" ref={modalRef}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 20px')

      handleOpen()

      await waitFor(() =>
        expect(baseElement).toHaveClass('usa-js-modal--active')
      )
      expect(baseElement).toHaveStyle('padding-right: 35px')

      handleClose()

      await waitFor(() =>
        expect(baseElement).not.toHaveClass('usa-js-modal--active')
      )
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

      const { container } = render(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <Modal {...modalProps}>Test modal</Modal>
        </>
      )

      expect(container).not.toHaveAttribute('aria-hidden')
      expect(container).not.toHaveAttribute('data-modal-hidden')

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      handleOpen()

      await waitFor(() => expect(container).toHaveAttribute('aria-hidden'))
      expect(container).toHaveAttribute('data-modal-hidden')

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')
      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      handleClose()

      await waitFor(() => expect(container).not.toHaveAttribute('aria-hidden'))
      expect(container).not.toHaveAttribute('data-modal-hidden')
      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')
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

      const { container } = render(
        <>
          <p data-testid="nonhidden">Some other element</p>
          <div data-testid="hidden" aria-hidden="true">
            Element that is normally hidden
          </div>
          <div id="#modal-root">
            <Modal {...modalProps}>Test modal</Modal>
          </div>
        </>
      )

      expect(container).not.toHaveAttribute('aria-hidden')
      expect(container).not.toHaveAttribute('data-modal-hidden')

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')

      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      handleOpen()

      await waitFor(() => expect(container).toHaveAttribute('aria-hidden'))
      expect(container).toHaveAttribute('data-modal-hidden')

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')

      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')

      handleClose()

      await waitFor(() => expect(container).not.toHaveAttribute('aria-hidden'))
      expect(container).not.toHaveAttribute('data-modal-hidden')

      expect(screen.getByTestId('nonhidden')).not.toHaveAttribute('aria-hidden')

      expect(screen.getByTestId('hidden')).toHaveAttribute('aria-hidden')
    })

    it('stops event propagation if toggle modal is called from within a modal', async () => {
      const user = userEvent.setup()

      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

      renderWithModalRoot(
        <Modal id="testModal" ref={modalRef}>
          Test modal
        </Modal>
      )

      expect(modalRef.current?.modalIsOpen).toBe(false)

      handleOpen()
      await waitFor(() => expect(modalRef.current?.modalIsOpen).toBe(true))

      await user.click(screen.getByText('Test modal'))

      await waitFor(() => expect(modalRef.current?.modalIsOpen).toBe(true))
    })

    describe('focusing', () => {
      it('activates a focus trap', async () => {
        const user = userEvent.setup()

        const {
          modalWrapper,
          modalWindow,
          queryForOpenButton,
          queryForCloseButton,
        } = renderWithModalRoot(<ExampleModal />)

        const openButton = queryForOpenButton()
        expect(openButton).toBeInTheDocument()

        await user.click(openButton!)

        const closeButton = queryForCloseButton()

        await waitFor(() => {
          expect(modalWrapper).toHaveClass('is-visible')
          expect(modalWindow).toHaveFocus()
          expect(closeButton).toBeInTheDocument()
        })

        await user.tab()
        expect(
          screen.getByRole('button', { name: 'Continue without saving' })
        ).toHaveFocus()

        await user.tab()
        expect(screen.getByRole('button', { name: 'Go back' })).toHaveFocus()

        await user.tab()

        expect(closeButton).toHaveFocus()

        await user.tab()
        expect(
          screen.getByRole('button', { name: 'Continue without saving' })
        ).toHaveFocus()
      })

      it('returns focus to the opener element on close', async () => {
        const user = userEvent.setup()

        const {
          modalWrapper,
          modalWindow,
          queryForOpenButton,
          queryForCloseButton,
        } = renderWithModalRoot(<ExampleModal />)

        const openButton = queryForOpenButton()
        expect(openButton).toBeInTheDocument()

        await user.click(openButton!)

        await waitFor(() => {
          expect(modalWrapper).toHaveClass('is-visible')
          expect(modalWindow).toHaveFocus()
        })

        const closeButton = queryForCloseButton()
        expect(closeButton).toBeInTheDocument()

        await user.tab()
        expect(
          screen.getByRole('button', {
            name: 'Continue without saving',
          })
        ).toHaveFocus()

        await user.click(closeButton!)

        expect(openButton).toHaveFocus()
      })

      it('the escape key closes the modal', async () => {
        const user = userEvent.setup()

        const { modalWrapper, modalWindow, queryForOpenButton } =
          renderWithModalRoot(<ExampleModal />)

        const openButton = queryForOpenButton()
        expect(openButton).toBeInTheDocument()

        await user.click(openButton!)

        await waitFor(() => {
          expect(modalWrapper).toHaveClass('is-visible')
          expect(modalWindow).toHaveFocus()
        })

        await user.keyboard('{escape}')

        await waitFor(() => {
          expect(modalWrapper).not.toHaveClass('is-visible')
          expect(openButton).toHaveFocus()
        })
      })

      it('can pass in a custom onFocus element', async () => {
        const user = userEvent.setup()

        const { modalWrapper, queryForOpenButton } = renderWithModalRoot(
          <ExampleModalWithFocusElement />
        )

        const openButton = queryForOpenButton()
        expect(openButton).toBeInTheDocument()

        await user.click(openButton!)

        await waitFor(() => {
          expect(modalWrapper).toHaveClass('is-visible')
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

        const { baseElement } = renderWithModalRoot(
          <Modal id="testModal" ref={modalRef} forceAction>
            {testModalChildren}
          </Modal>
        )

        expect(baseElement).not.toHaveClass('usa-js-no-click')

        handleOpen()

        await waitFor(() => expect(baseElement).toHaveClass('usa-js-no-click'))

        handleClose()

        await waitFor(() =>
          expect(baseElement).not.toHaveClass('usa-js-no-click')
        )
      })

      it('cannot click on the overlay to close', async () => {
        const user = userEvent.setup()

        const modalRef = createRef<ModalRef>()
        const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

        const testModalId = 'testModal'

        const { queryForOverlay } = renderWithModalRoot(
          <Modal id={testModalId} ref={modalRef} forceAction>
            {testModalChildren}
          </Modal>
        )

        handleOpen()
        await waitFor(() => expect(modalRef.current?.modalIsOpen).toBe(true))

        const overlay = queryForOverlay()
        expect(overlay).toBeInTheDocument()
        await user.click(overlay!)
        expect(modalRef.current?.modalIsOpen).toBe(true)
      })

      it('the escape key does not close the modal', async () => {
        const user = userEvent.setup()

        const { modalWrapper, modalWindow, queryForOpenButton } =
          renderWithModalRoot(<ExampleModal forceAction />)

        const openButton = queryForOpenButton()
        expect(openButton).toBeInTheDocument()

        await user.click(openButton!)

        await waitFor(() => {
          expect(modalWrapper).toHaveClass('is-visible')
          expect(modalWindow).toHaveFocus()
        })

        await user.keyboard('{escape}')

        await waitFor(() => {
          expect(modalWrapper).toHaveClass('is-visible')
          expect(modalWindow).toHaveFocus()
        })
      })
    })
  })

  describe('unmounting', () => {
    it('resets the body element if the modal was open', async () => {
      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)

      const { baseElement, unmount } = renderWithModalRoot(
        <Modal id="testModal" ref={modalRef}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 0px')

      handleOpen()

      await waitFor(() =>
        expect(baseElement).toHaveClass('usa-js-modal--active')
      )
      expect(baseElement).toHaveStyle('padding-right: 15px')

      await waitFor(() => unmount())

      await waitFor(() =>
        expect(baseElement).not.toHaveClass('usa-js-modal--active')
      )
      expect(baseElement).toHaveStyle('padding-right: 0px')
    })

    it('does not reset the body element if the modal was not open', async () => {
      const modalRef = createRef<ModalRef>()
      const handleOpen = () => modalRef.current?.toggleModal(undefined, true)
      const handleClose = () => modalRef.current?.toggleModal(undefined, false)

      const { baseElement, unmount } = renderWithModalRoot(
        <Modal id="testModal" ref={modalRef}>
          Test modal
        </Modal>
      )

      expect(baseElement).not.toHaveClass('usa-js-modal--active')
      expect(baseElement).toHaveStyle('padding-right: 0px')

      handleOpen()

      await waitFor(() =>
        expect(baseElement).toHaveClass('usa-js-modal--active')
      )
      expect(baseElement).toHaveStyle('padding-right: 15px')

      handleClose()

      await waitFor(() =>
        expect(baseElement).not.toHaveClass('usa-js-modal--active')
      )
      expect(baseElement).toHaveStyle('padding-right: 0px')

      await waitFor(() => unmount())

      await waitFor(() =>
        expect(baseElement).not.toHaveClass('usa-js-modal--active')
      )
      expect(baseElement).toHaveStyle('padding-right: 0px')
    })
  })
})

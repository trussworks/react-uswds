import React, { useRef } from 'react'

import { Modal, ModalRef } from './Modal'
import { ModalHeading } from './ModalHeading/ModalHeading'
import { ModalFooter } from './ModalFooter/ModalFooter'
import { ModalOpenButton } from './ModalOpenButton'

import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Modal component

Source: http://designsystem.digital.gov/components/modal
`,
      },
    },
  },
}

export const defaultModal = (): React.ReactElement => {
  const modalRef = useRef<ModalRef>()

  const handleOpen = (e) => modalRef.current?.toggleModal(e, true)
  const handleClose = (e) => modalRef.current?.toggleModal(e, false)

  return (
    <>
      <ModalOpenButton
        handleOpen={handleOpen}
        href="#example-modal-1"
        aria-controls="example-modal-1">
        Open default modal
      </ModalOpenButton>
      <Modal
        ref={modalRef}
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
        </div>
        <ModalFooter>
          <ButtonGroup>
            <Button type="button" data-close-modal onClick={handleClose}>
              Continue without saving
            </Button>
            <Button
              type="button"
              data-close-modal
              unstyled
              className="padding-105 text-center"
              onClick={handleClose}>
              Go back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const largeModal = (): React.ReactElement => {
  const modalRef = useRef<ModalRef>()

  const handleOpen = (e) => modalRef.current?.toggleModal(e, true)
  const handleClose = (e) => modalRef.current?.toggleModal(e, false)

  return (
    <>
      <ModalOpenButton
        handleOpen={handleOpen}
        href="#example-modal-2"
        aria-controls="example-modal-2">
        Open large modal
      </ModalOpenButton>
      <Modal
        ref={modalRef}
        isLarge
        aria-labelledby="modal-2-heading"
        aria-describedby="modal-2-description"
        id="example-modal-2">
        <ModalHeading id="modal-2-heading">
          Are you sure you want to continue?
        </ModalHeading>
        <div className="usa-prose">
          <p id="modal-2-description">
            You have unsaved changes that will be lost.
          </p>
        </div>
        <ModalFooter>
          <ButtonGroup>
            <Button type="button" data-close-modal onClick={handleClose}>
              Continue without saving
            </Button>
            <Button
              type="button"
              data-close-modal
              unstyled
              className="padding-105 text-center"
              onClick={handleClose}>
              Go back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const forceActionModal = (): React.ReactElement => {
  const modalRef = useRef<ModalRef>()

  const handleOpen = (e) => modalRef.current?.toggleModal(e, true)
  const handleClose = (e) => modalRef.current?.toggleModal(e, false)

  return (
    <>
      <ModalOpenButton
        handleOpen={handleOpen}
        href="#example-modal-3"
        aria-controls="example-modal-3">
        Open modal with forced action
      </ModalOpenButton>
      <Modal
        ref={modalRef}
        forceAction
        aria-labelledby="modal-3-heading"
        aria-describedby="modal-3-description"
        id="example-modal-3">
        <ModalHeading id="modal-3-heading">
          Your session will end soon.
        </ModalHeading>
        <div className="usa-prose">
          <p id="modal-3-description">
            You’ve been inactive for too long. Please choose to stay signed in
            or sign out. Otherwise, you’ll be signed out automatically in 5
            minutes.
          </p>
        </div>
        <ModalFooter>
          <ButtonGroup>
            <Button type="button" data-close-modal onClick={handleClose}>
              Yes, stay signed in
            </Button>
            <Button
              type="button"
              data-close-modal
              unstyled
              className="padding-105 text-center"
              onClick={handleClose}>
              Sign out
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const customFocusElementModal = (): React.ReactElement => {
  const modalRef = useRef<ModalRef>()

  const handleOpen = (e) => modalRef.current?.toggleModal(e, true)
  const handleClose = (e) => modalRef.current?.toggleModal(e, false)

  return (
    <>
      <ModalOpenButton
        handleOpen={handleOpen}
        href="#example-modal-1"
        aria-controls="example-modal-1">
        Open modal with custom initial focus element
      </ModalOpenButton>
      <Modal
        ref={modalRef}
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
          <button type="button">Decoy button</button>
          <button type="button" data-focus="true">
            Focus me first
          </button>
        </div>
        <ModalFooter>
          <ButtonGroup>
            <Button type="button" data-close-modal onClick={handleClose}>
              Continue without saving
            </Button>
            <Button
              type="button"
              data-close-modal
              unstyled
              className="padding-105 text-center"
              onClick={handleClose}>
              Go back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

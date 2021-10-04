import React from 'react'

import { Modal } from './Modal'
import { ModalHeading } from './ModalHeading/ModalHeading'
import { ModalFooter } from './ModalFooter/ModalFooter'
import { ModalOpenButton } from './ModalOpenButton'

import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { useModal } from './utils'

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

export const largeModal = (): React.ReactElement => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <ModalOpenButton
        handleOpen={openModal}
        href="#example-modal-2"
        aria-controls="example-modal-2"
        onClick={(e) => e.preventDefault()}>
        Open large modal
      </ModalOpenButton>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
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

export const forceActionModal = (): React.ReactElement => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <ModalOpenButton
        handleOpen={openModal}
        href="#example-modal-3"
        aria-controls="example-modal-3"
        onClick={(e) => e.preventDefault()}>
        Open modal with forced action
      </ModalOpenButton>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
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
            <Button type="button" data-close-modal onClick={closeModal}>
              Yes, stay signed in
            </Button>
            <Button
              type="button"
              data-close-modal
              unstyled
              className="padding-105 text-center"
              onClick={closeModal}>
              Sign out
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const customFocusElementModal = (): React.ReactElement => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <ModalOpenButton
        handleOpen={openModal}
        href="#example-modal-1"
        aria-controls="example-modal-1"
        onClick={(e) => e.preventDefault()}>
        Open modal with custom initial focus element
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
          <button type="button">Decoy button</button>
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

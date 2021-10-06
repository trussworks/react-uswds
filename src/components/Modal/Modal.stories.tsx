import React, { useRef } from 'react'

import { Modal, ModalRef } from './Modal'
import { ModalHeading } from './ModalHeading/ModalHeading'
import { ModalFooter } from './ModalFooter/ModalFooter'
import { ModalToggleButton } from './ModalToggleButton'

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

To use this component, you will need to create a ref and pass it into the rendered Modal component. This ref will expose several properties (also described by the exported ModalRef type):

- modalId: string
  - the value of the id attribute given to the modal
- modalIsOpen: boolean
  - true if the modal is currently open, otherwise false
- toggleModal: (e?: React.MouseEvent, open?: boolean) => boolean
  - use this function to open or close the modal.
  - if attached to an event handler, pass the event in
  - if the second argument is provided, it will explicitly open the modal if true, or explicitly close it if false
  - returns true if the toggle operation was successful, false if the event was prevented.

Follow the [USWDS](https://designsystem.digital.gov/components/modal/) guidance for using modals:

- Pass a unique ID into each modal component.
- Any component that opens the modal should be a button or anchor element, have the [data-open-modal] attribute, and [aria-controls] attribute with the value of the modal ID.
- Any component that closes the modal should be a button element, and have the [data-close-modal] attribute, and [aria-controls] attribute with the value of the modal ID.
- Use the forceAction prop on the modal component if the user should be forced to take an action before closing the modal.

You can also use the provided ModalToggleButton and/or ModalOpenLink components, which will adhere to the above guidelines for convenience.
`,
      },
    },
  },
}

export const defaultModal = (): React.ReactElement => {
  const modalRef = useRef<ModalRef>()

  return (
    <>
      <ModalToggleButton modalRef={modalRef} opener>
        Open default modal
      </ModalToggleButton>
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
            <ModalToggleButton modalRef={modalRef} closer>
              Continue without saving
            </ModalToggleButton>
            <ModalToggleButton
              modalRef={modalRef}
              closer
              unstyled
              className="padding-105 text-center">
              Go back
            </ModalToggleButton>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const largeModal = (): React.ReactElement => {
  const modalRef = useRef<ModalRef>()

  return (
    <>
      <ModalToggleButton modalRef={modalRef} opener>
        Open large modal
      </ModalToggleButton>
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
            <ModalToggleButton modalRef={modalRef} closer>
              Continue without saving
            </ModalToggleButton>
            <ModalToggleButton
              modalRef={modalRef}
              closer
              unstyled
              className="padding-105 text-center">
              Go back
            </ModalToggleButton>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const forceActionModal = (): React.ReactElement => {
  const modalRef = useRef<ModalRef>()

  return (
    <>
      <ModalToggleButton modalRef={modalRef} opener>
        Open modal with forced action
      </ModalToggleButton>
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
            <ModalToggleButton modalRef={modalRef} closer>
              Yes, stay signed in
            </ModalToggleButton>
            <ModalToggleButton
              modalRef={modalRef}
              closer
              unstyled
              className="padding-105 text-center">
              Sign out
            </ModalToggleButton>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const customFocusElementModal = (): React.ReactElement => {
  const modalRef = useRef<ModalRef>()

  return (
    <>
      <ModalToggleButton modalRef={modalRef} opener>
        Open modal with custom initial focus element
      </ModalToggleButton>
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
            <ModalToggleButton modalRef={modalRef} closer>
              Continue without saving
            </ModalToggleButton>
            <ModalToggleButton
              modalRef={modalRef}
              closer
              unstyled
              className="padding-105 text-center">
              Go back
            </ModalToggleButton>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )
}

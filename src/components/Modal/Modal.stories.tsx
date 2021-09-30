import React from 'react'

import { Modal } from './Modal'
import { ModalFooter } from './ModalFooter/ModalFooter'
import { ModalHeading } from './ModalHeading/ModalHeading'
import { ModalWrapper } from './ModalWrapper/ModalWrapper'

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

export const defaultModal = (): React.ReactElement => (
  <ModalWrapper isVisible>
    <Modal
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
          <Button type="button" data-close-modal>
            Continue without saving
          </Button>
          <Button
            type="button"
            data-close-modal
            unstyled
            className="padding-105 text-center">
            Go back
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  </ModalWrapper>
)

export const largeModal = (): React.ReactElement => (
  <ModalWrapper isVisible>
    <Modal
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
          <Button type="button" data-close-modal>
            Continue without saving
          </Button>
          <Button
            type="button"
            unstyled
            data-close-modal
            className="padding-105 text-center">
            Go back
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  </ModalWrapper>
)

export const modalWithForcedAction = (): React.ReactElement => (
  <ModalWrapper isVisible>
    <Modal
      id="example-modal-3"
      aria-labelledby="modal-3-heading"
      aria-describedby="modal-3-description"
      forceAction>
      <ModalHeading id="modal-3-heading">
        Your session will end soon.
      </ModalHeading>
      <div className="usa-prose">
        <p id="modal-3-description">
          You’ve been inactive for too long. Please choose to stay signed in or
          sign out. Otherwise, you’ll be signed out automatically in 5 minutes.
        </p>
      </div>
      <ModalFooter>
        <ButtonGroup>
          <Button type="button" data-close-modal>
            Yes, stay signed in
          </Button>
          <Button
            type="button"
            unstyled
            className="padding-105 text-center"
            data-close-modal>
            Sign out
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  </ModalWrapper>
)

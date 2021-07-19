import React from 'react'

import { Modal } from './Modal'
import { ModalCloseButton } from '../ModalCloseButton/ModalCloseButton'
import { ModalContent } from '../ModalContent/ModalContent'
import { ModalDescription } from '../ModalDescription/ModalDescription'
import { ModalFooter } from '../ModalFooter/ModalFooter'
import { ModalHeading } from '../ModalHeading/ModalHeading'
import { ModalMain } from '../ModalMain/ModalMain'
import { ModalWrapper } from '../ModalWrapper/ModalWrapper'

import { Button } from '../../Button/Button'
import { ButtonGroup } from '../../ButtonGroup/ButtonGroup'

import close from 'uswds/src/img/close.svg'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 SiteAlert component

Source: http://designsystem.digital.gov/components/modal
`,
      },
    },
  },
}

export const defaultModal = (): React.ReactElement => (
  <ModalWrapper isVisible>
    <Modal>
      <ModalContent>
        <ModalMain>
          <ModalHeading type="h2">
            Are you sure you want to continue?
          </ModalHeading>
          <ModalDescription>
            <p>You have unsaved changes that will be lost.</p>
          </ModalDescription>
          <ModalFooter>
            <ButtonGroup>
              <Button type="button">Continue without saving</Button>
              <Button type="button">Go back</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalMain>
        <ModalCloseButton>
          <img src={close} alt="Close this window" />
        </ModalCloseButton>
      </ModalContent>
    </Modal>
  </ModalWrapper>
)

// <p id="modal-1-description">You have unsaved changes that will be lost.</p>
export const largeModal = (): React.ReactElement => (
  <ModalWrapper isVisible>
    <Modal isLarge>
      large modal
      <ModalContent>
        <ModalMain>
          <ModalHeading type="h2">
            Are you sure you want to continue?
          </ModalHeading>
          <ModalDescription>
            <p>You have unsaved changes that will be lost.</p>
          </ModalDescription>
          <ModalFooter>
            <ButtonGroup>
              <Button type="button">Continue without saving</Button>
              <Button type="button">Go back</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalMain>
        <ModalCloseButton>
          <img src={close} alt="Close this window" />
        </ModalCloseButton>
      </ModalContent>
    </Modal>
  </ModalWrapper>
)

export const modalWithForcedAction = (): React.ReactElement => (
  <ModalWrapper isVisible>
    <Modal>
      <ModalContent>
        <ModalMain>
          <ModalHeading type="h2">
            Are you sure you want to continue?
          </ModalHeading>
          <ModalDescription>
            <p>You have unsaved changes that will be lost.</p>
          </ModalDescription>
          <ModalFooter>
            <ButtonGroup>
              <Button type="button">Continue without saving</Button>
              <Button type="button">Go back</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalMain>
      </ModalContent>
    </Modal>
  </ModalWrapper>
)

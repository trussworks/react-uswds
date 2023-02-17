import React from 'react'

import { ModalWindow } from './ModalWindow/ModalWindow'
import { ModalHeading } from './ModalHeading/ModalHeading'
import { ModalFooter } from './ModalFooter/ModalFooter'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { ModalWrapper } from './ModalWrapper/ModalWrapper'

type StorybookArguments = {
  handleClose: () => void
}

const noop = (): void => {
  return
}

export default {
  title: 'Components/Modal/Open states',
  argTypes: {
    handleClose: noop,
  },
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

export const defaultModal = (
  argTypes: StorybookArguments
): React.ReactElement => {
  return (
    <ModalWrapper
      role="dialog"
      id="example-modal-1"
      isVisible={true}
      handleClose={argTypes.handleClose}
      forceAction={false}
      aria-labelledby="modal-1-heading"
      aria-describedby="modal-1-description">
      <ModalWindow
        modalId="example-modal-1"
        tabIndex={-1}
        handleClose={argTypes.handleClose}>
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
            <Button type="button" onClick={argTypes.handleClose}>
              Continue without saving
            </Button>
            <Button
              type="button"
              onClick={argTypes.handleClose}
              unstyled
              className="padding-105 text-center">
              Go back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalWindow>
    </ModalWrapper>
  )
}

export const largeModal = (
  argTypes: StorybookArguments
): React.ReactElement => {
  return (
    <ModalWrapper
      role="dialog"
      id="example-modal-2"
      isVisible={true}
      handleClose={argTypes.handleClose}
      forceAction={false}
      aria-labelledby="modal-2-heading"
      aria-describedby="modal-2-description">
      <ModalWindow
        isLarge
        modalId="example-modal-2"
        tabIndex={-1}
        handleClose={argTypes.handleClose}>
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
            <Button type="button" onClick={argTypes.handleClose}>
              Continue without saving
            </Button>
            <Button
              type="button"
              onClick={argTypes.handleClose}
              unstyled
              className="padding-105 text-center">
              Go back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalWindow>
    </ModalWrapper>
  )
}

export const forceActionModal = (
  argTypes: StorybookArguments
): React.ReactElement => {
  return (
    <ModalWrapper
      role="dialog"
      id="example-modal-3"
      isVisible={true}
      handleClose={argTypes.handleClose}
      forceAction={true}
      aria-labelledby="modal-3-heading"
      aria-describedby="modal-3-description">
      <ModalWindow
        forceAction
        modalId="example-modal-3"
        tabIndex={-1}
        handleClose={argTypes.handleClose}>
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
            <Button type="button" onClick={argTypes.handleClose}>
              Yes, stay signed in
            </Button>
            <Button
              type="button"
              onClick={argTypes.handleClose}
              unstyled
              className="padding-105 text-center">
              Sign out
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalWindow>
    </ModalWrapper>
  )
}

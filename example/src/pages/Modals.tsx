import React from 'react'
import {
  Modal,
  Button,
  connectModal,
  ConnectedModalProps,
} from '@trussworks/react-uswds'
import { connect, ConnectedProps } from 'react-redux'

import { openModal, closeModal } from './../redux/actions'
import { AppState, ModalState } from './../redux/types'

interface TestModalProps extends ConnectedModalProps {
  modalKey: string
}

const TestModal = ({ onClose }: TestModalProps): React.ReactElement => (
  <Modal
    title={<h2>Test Modal</h2>}
    actions={
      <>
        <Button type="button" outline onClick={onClose}>
          Cancel
        </Button>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </>
    }>
    <p>This is a test modal!</p>
  </Modal>
)

const ConnectedTestModal = connectModal(TestModal)

const mapStateToProps = (state: AppState): ModalState => ({
  openModalKey: state.modalState.openModalKey,
})

const mapDispatchToProps = {
  openModal: openModal,
  closeModal: closeModal,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

const ExamplePage = ({
  openModalKey,
  openModal,
  closeModal,
}: ConnectedProps<typeof connector>): React.ReactElement => {
  return (
    <section>
      <h1>Modals</h1>

      <p className="usa-intro">
        This page provides examples of how modals may be used within an
        application.
      </p>

      <div>
        <Button type="button" onClick={() => openModal('testModal')}>
          Click me!
        </Button>
        <ConnectedTestModal
          modalKey="testModal"
          isOpen={'testModal' === openModalKey}
          onClose={() => closeModal('testModal')}
        />
      </div>
    </section>
  )
}

const ConnectedExamplePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamplePage)

export default ConnectedExamplePage

/** Provide exmaple of modals using hooks and redux */

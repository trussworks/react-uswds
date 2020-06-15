import React from 'react'
import {
  Modal,
  Button,
  connectModal,
  ConnectedModalProps,
  useModal
} from '@trussworks/react-uswds'
import { connect, ConnectedProps } from 'react-redux'

import { openModalAction, closeModalAction } from './../redux/actions'
import { AppState, ModalState } from './../redux/types'


interface TestModalProps extends ConnectedModalProps {
  modalKey?: string
  children: React.ReactNode
}

const TestModal = ({ onClose, children }: TestModalProps): React.ReactElement => (
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
    { children }
  </Modal>
)

/** Example of Modal Component Using Redux */
const ConnectedTestModal = connectModal(TestModal)

const mapStateToProps = (state: AppState): ModalState => ({
  openModalKey: state.modalState.openModalKey,
})

const mapDispatchToProps = {
  openModalAction: openModalAction,
  closeModalAction: closeModalAction,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
/** End of Example of Modal Component Using Redux */

const ExamplePage = ({
  openModalKey,
  openModalAction,
  closeModalAction,
}: ConnectedProps<typeof connector>): React.ReactElement => {

  /** Example of Modal Component Using Hooks */
  const { isOpen, openModal, closeModal } = useModal()
  /** End of Example of Modal Component Using Hooks */

  return (
    <section>
      <h1>Modals</h1>

      <p className="usa-intro">
        This page provides examples of how modals may be used within an
        application.
      </p>

      <div style={{ margin: '8px'}}>
        <Button type="button" onClick={() => openModalAction('testModal')}>
          Click me!
        </Button>
        {/* Example of modal using redux for state management */}
        <ConnectedTestModal
          modalKey="testModal"
          isOpen={'testModal' === openModalKey}
          onClose={() => closeModalAction('testModal')}>
          <p>This is a modal that uses redux!</p>
        </ConnectedTestModal>
      </div>
      <div style={{ margin: '8px'}}>
        <Button type="button" onClick={openModal}>
          Click me!
        </Button>
        {/* Example of modal using hooks for state management */}
        <ConnectedTestModal isOpen={isOpen} onClose={closeModal} >
          <p>This is a modal that uses hooks!</p>
        </ConnectedTestModal>
    </div>
    </section>
  )
}

const ConnectedExamplePage = connector(ExamplePage)

export default ConnectedExamplePage

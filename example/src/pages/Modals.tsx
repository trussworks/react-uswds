import React from 'react'
import { Modal, Button } from '@trussworks/react-uswds'
import { connect } from 'react-redux'
import { openModal, closeModal} from './../redux/actions'
import { AppState, ModalState } from './../redux/types'

const TestModal = (key: string): React.ReactElement => (
    <Modal
      title={<h2>Test Modal</h2>}
      actions={
        <>
          <Button type="button" outline onClick={() => closeModal(key)}>
            Cancel
          </Button>
          <Button type="button" onClick={ () => closeModal(key)}>
            Close
          </Button>
        </>
      }>
      <p>This is a test modal!</p>
    </Modal>
)



const mapStateToProps = (
  state: AppState
): ModalState => ({
  openModalKey: state.modalState.openModalKey
})

const mapDispatchToProps = {
  openModal: openModal,
  closeModal: closeModal
}

export const ConnectedModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestModal)


const ExamplePage = (): React.ReactElement => (
  <section>
    <h1>Modals</h1>

    <p className="usa-intro">
      This page provides examples of how modals may be used within an application.
    </p>

    <div>
      <Button type="button" onClick={() => openModal('testModal')}>
        Click me!
      </Button>
      <ConnectedModal key='testModal' isOpen={'testModal' === state.modalState.openModalKey} onClose={() => closeModal('testModal')} />
    </div>

  </section>
)

export default ExamplePage

/** Provide exmaple of modals using hooks and redux */

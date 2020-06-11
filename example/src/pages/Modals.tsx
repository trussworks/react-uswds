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

/** Example of Modal Component Using Redux */
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
    <p>This is a test modal that uses redux!</p>
  </Modal>
)

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

  const HookTestModal = (): React.ReactElement => (
    <Modal
      title={<h2>Test Modal</h2>}
      actions={
        <>
          <Button type="button" outline onClick={closeModal}>
            Cancel
          </Button>
          <Button type="button" onClick={closeModal}>
            Close
          </Button>
        </>
      }>
      <p>This is a test modal that uses hooks!</p>
    </Modal>
  )

  const ConnectedHookTestModal = connectModal(HookTestModal)
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
        <ConnectedTestModal
          modalKey="testModal"
          isOpen={'testModal' === openModalKey}
          onClose={() => closeModalAction('testModal')}
        />
      </div>
      <div style={{ margin: '8px'}}>
        <Button type="button" onClick={openModal}>
          Click me!
        </Button>
        <ConnectedHookTestModal isOpen={isOpen} onClose={closeModal} />
    </div>
    </section>
  )
}

const ConnectedExamplePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamplePage)

export default ConnectedExamplePage

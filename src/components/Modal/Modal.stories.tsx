import React from 'react'

import { Button } from '../Button/Button'

import { Modal, Overlay, ModalContainer, connectModal, useModal } from './Modal'

export default {
  title: 'Other/Modal',
  component: Modal,
  parameters: {
    info: `Truss-designed component`,
  },
}

const testTitle = <h2>My Modal</h2>

const testActions = (
  <>
    <Button type="button" outline>
      Cancel
    </Button>
    <Button type="button">Close</Button>
  </>
)

export const basic = (): React.ReactElement => (
  <div
    style={{
      margin: '100px',
    }}>
    <Modal>
      <p>This is a basic modal!</p>
    </Modal>
  </div>
)

export const withTitle = (): React.ReactElement => (
  <div
    style={{
      margin: '100px',
    }}>
    <Modal title={testTitle}>
      <p>This is a basic modal!</p>
    </Modal>
  </div>
)

export const withActions = (): React.ReactElement => (
  <div
    style={{
      margin: '100px',
    }}>
    <Modal actions={testActions}>
      <p>This is a basic modal!</p>
    </Modal>
  </div>
)

export const withTitleAndActions = (): React.ReactElement => (
  <div
    style={{
      margin: '100px',
    }}>
    <Modal title={testTitle} actions={testActions}>
      <p>This is a basic modal!</p>
    </Modal>
  </div>
)

export const closeCaseModal = (): React.ReactElement => (
  <div
    style={{
      margin: '100px',
    }}>
    <Modal
      title={<h2>Close case?</h2>}
      actions={
        <>
          <Button type="button" outline>
            Cancel
          </Button>
          <Button type="button">Close investigation</Button>
        </>
      }>
      <p>
        This will close your investigative work for{' '}
        <strong>Case #590381450</strong> and forward the case to adjudication.
      </p>
    </Modal>
  </div>
)

export const withOverlay = (): React.ReactElement => (
  <div>
    <Overlay />
    <ModalContainer>
      <Modal
        title={<h2>Close case?</h2>}
        actions={
          <>
            <Button type="button" outline>
              Cancel
            </Button>
            <Button type="button">Close investigation</Button>
          </>
        }>
        <p>
          This will close your investigative work for{' '}
          <strong>Case #590381450</strong> and forward the case to adjudication.
        </p>
      </Modal>
    </ModalContainer>
  </div>
)

export const fullExample = (): React.ReactElement => {
  const { isOpen, openModal, closeModal } = useModal()

  const TestModal = (): React.ReactElement => (
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
      <p>This is a test modal!</p>
    </Modal>
  )

  const ConnectedTestModal = connectModal(TestModal)

  return (
    <div>
      <Button type="button" onClick={openModal}>
        Click me!
      </Button>
      <ConnectedTestModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

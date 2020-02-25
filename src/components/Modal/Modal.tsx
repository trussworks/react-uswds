import React, { useState } from 'react'
import classnames from 'classnames'

import styles from './Modal.module.scss'

type ModalProps = {
  title?: React.ReactNode
  children: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

/** Modal UI component */
export const Modal = ({
  title,
  children,
  actions,
  className,
}: ModalProps): React.ReactElement => {
  const classes = classnames(styles.modal, className)

  return (
    <div data-testid="modal" className={classes}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
      <div className={styles.actions}>{actions}</div>
    </div>
  )
}

/** Overlay UI component (grey background) */
export const Overlay = (): React.ReactElement => (
  <div className={styles.overlay} />
)

/** Modal positioning component */
export const ModalContainer = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement => (
  <div className={styles.modalContainer}>{children}</div>
)

/** connectModal and useModal package the logic & state of opening/closing a modal */
export interface ConnectedModalProps {
  isOpen: boolean
  onClose: () => void
}

export const connectModal = function<P extends ConnectedModalProps>(
  Component: React.FunctionComponent<P> | React.ComponentType<P>
): React.FunctionComponent<P> {
  const ConnectedModal = ({
    isOpen,
    ...props
  }: P): React.ReactElement | null => {
    if (!isOpen) return null
    return (
      <>
        <Overlay />
        <ModalContainer>
          <Component {...(props as P)} />
        </ModalContainer>
      </>
    )
  }

  return ConnectedModal
}

export type ModalHook = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useModal = (): ModalHook => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (): void => {
    setIsOpen(true)
  }
  const closeModal = (): void => {
    setIsOpen(false)
  }

  return { isOpen, openModal, closeModal }
}

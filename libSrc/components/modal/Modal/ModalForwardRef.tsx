import { forwardRef } from 'react'
import Modal from './Modal.js'

const ModalForwardRef = forwardRef(Modal)

export type { BaseModalProps, ModalProps, ModalRef } from './Modal.js'

export default ModalForwardRef

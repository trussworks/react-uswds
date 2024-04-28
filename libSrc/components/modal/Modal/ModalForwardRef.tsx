import React, { forwardRef } from 'react'
import Modal, { ModalProps, ModalRef } from './Modal.js'

const ModalForwardRef = forwardRef(function ModalForwardRef(
  props: ModalProps,
  ref: React.ForwardedRef<ModalRef>
) {
  return <Modal _ref={ref} {...props} />
})

export type { BaseModalProps, ModalProps, ModalRef } from './Modal.js'

export default ModalForwardRef

import { forwardRef } from 'react'
import ModalWrapper from './ModalWrapper.js'

const ModalWrapperForwardRef = forwardRef(ModalWrapper)

export type {
  BaseModalWrapperProps,
  ModalWrapperProps,
} from './ModalWrapper.js'

export default ModalWrapperForwardRef

import { forwardRef } from 'react'
import ModalWindow from './ModalWindow.js'

const ModalWindowForwardRef = forwardRef(ModalWindow)

export type { BaseModalWindowProps, ModalWindowProps } from './ModalWindow.js'

export default ModalWindowForwardRef

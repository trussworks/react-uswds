import React, { forwardRef } from 'react'
import ModalWindow, { ModalWindowProps } from './ModalWindow.js'

const ModalWindowForwardRef = forwardRef(function ModalWindowForwardRef(
  props: ModalWindowProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <ModalWindow _ref={ref} {...props} />
})

export type { BaseModalWindowProps, ModalWindowProps } from './ModalWindow.js'

export default ModalWindowForwardRef

import React, { forwardRef } from 'react'
import ComboBox, { ComboBoxProps, ComboBoxRef } from './ComboBox.js'

const ComboBoxForwardRef = forwardRef(function ComboBoxForwardRef(
  props: ComboBoxProps,
  ref: React.ForwardedRef<ComboBoxRef>
) {
  return <ComboBox _ref={ref} {...props} />
})

export type { BaseComboBoxProps, ComboBoxProps } from './ComboBox.js'

export default ComboBoxForwardRef

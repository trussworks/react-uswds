import { forwardRef } from 'react'
import ComboBox from './ComboBox.js'

const ComboBoxForwardRef = forwardRef(ComboBox)

export type { BaseComboBoxProps, ComboBoxProps } from './ComboBox.js'

export default ComboBoxForwardRef

import { forwardRef } from 'react'
import Button from './Button.js'

const ButtonForwardRef = forwardRef(Button)

export type { BaseButtonProps, ButtonProps } from './Button.js'

export default ButtonForwardRef

import React, { forwardRef } from 'react'
import Button, { ButtonProps } from './Button.js'

const ButtonForwardRef = forwardRef(function ButtonForwardRef(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return <Button _ref={ref} {...props} />
})

export type { BaseButtonProps, ButtonProps } from './Button.js'

export default ButtonForwardRef

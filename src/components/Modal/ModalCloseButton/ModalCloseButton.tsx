import React from 'react'

import classnames from 'classnames'
import { Button } from '../../Button/Button'

interface ModalCloseButtonProps {
  children: React.ReactNode
  className?: string
}
export const ModalCloseButton = ({
  children,
  className,
  ...buttonProps
}: ModalCloseButtonProps &
  JSX.IntrinsicElements['button']): React.ReactElement => {
  const classes = classnames('usa-modal__close', className)

  return (
    <Button className={classes} type="button" data-close-modal {...buttonProps}>
      {children}
    </Button>
  )
}

export default ModalCloseButton

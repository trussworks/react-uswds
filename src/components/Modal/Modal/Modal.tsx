import React from 'react'

import classnames from 'classnames'

interface ModalProps {
  children: React.ReactNode
  className?: string
  isLarge?: boolean
}

export const Modal = ({
  className,
  children,
  isLarge = false,
  ...divProps
}: ModalProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(
    'usa-modal',
    {
      'usa-modal--lg': isLarge,
    },
    className
  )
  return (
    <div data-testid="modal" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default Modal

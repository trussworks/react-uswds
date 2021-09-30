import React from 'react'
import classnames from 'classnames'

import { ModalCloseButton } from '../ModalCloseButton/ModalCloseButton'

interface ModalProps {
  children: React.ReactNode
  className?: string
  isLarge?: boolean
  forceAction?: boolean
}

export const Modal = ({
  className,
  children,
  isLarge = false,
  forceAction = false,
  ...divProps
}: ModalProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(
    'usa-modal',
    {
      'usa-modal--lg': isLarge,
    },
    className
  )

  const handleClose = () => {
    /* */
  }

  // needs a unique ID
  return (
    <div
      data-testid="modal"
      className={classes}
      {...divProps}
      data-force-action={forceAction}>
      <div className="usa-modal__content">
        <div className="usa-modal__main">{children}</div>
        {!forceAction && <ModalCloseButton handleClose={handleClose} />}
      </div>
    </div>
  )
}

export default Modal

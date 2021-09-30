import React from 'react'
import classnames from 'classnames'

import { ModalCloseButton } from '../ModalCloseButton/ModalCloseButton'

interface ModalWindowProps {
  modalId: string
  children: React.ReactNode
  handleClose: () => void
  className?: string
  isLarge?: boolean
  forceAction?: boolean
}

export const ModalWindow = ({
  modalId,
  className,
  children,
  handleClose,
  isLarge = false,
  forceAction = false,
  ...divProps
}: ModalWindowProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(
    'usa-modal',
    {
      'usa-modal--lg': isLarge,
    },
    className
  )

  // needs a unique ID
  return (
    <div
      data-testid="modalWindow"
      className={classes}
      {...divProps}
      data-force-action={forceAction}>
      <div className="usa-modal__content">
        <div className="usa-modal__main">{children}</div>
        {!forceAction && (
          <ModalCloseButton aria-controls={modalId} handleClose={handleClose} />
        )}
      </div>
    </div>
  )
}

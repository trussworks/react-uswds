import React from 'react'
import classnames from 'classnames'

import ModalCloseButton from '../ModalCloseButton/ModalCloseButton.js'

export interface BaseModalWindowProps {
  modalId: string
  children: React.ReactNode
  handleClose: () => void
  className?: string
  isLarge?: boolean
  forceAction?: boolean
  // TODO: Remove underscore, or remove property entirely if handled by new React 19 typing
  _ref?: React.ForwardedRef<HTMLDivElement>
}

export type ModalWindowProps = BaseModalWindowProps &
  JSX.IntrinsicElements['div']

const ModalWindow = ({
  modalId,
  className,
  children,
  handleClose,
  isLarge = false,
  forceAction = false,
  _ref,
  ...divProps
}: ModalWindowProps): React.ReactElement => {
  const classes = classnames(
    'usa-modal',
    {
      'usa-modal--lg': isLarge,
    },
    className
  )

  return (
    <div
      data-testid="modalWindow"
      className={classes}
      ref={_ref}
      data-force-action={forceAction}
      {...divProps}>
      <div className="usa-modal__content">
        <div className="usa-modal__main">{children}</div>
        {!forceAction && (
          <ModalCloseButton aria-controls={modalId} handleClose={handleClose} />
        )}
      </div>
    </div>
  )
}

export default ModalWindow

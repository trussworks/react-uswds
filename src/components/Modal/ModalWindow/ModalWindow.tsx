import React, { forwardRef } from 'react'
import classnames from 'classnames'

import ModalCloseButton from '../ModalCloseButton/ModalCloseButton'

export interface BaseModalWindowProps {
  modalId: string
  children: React.ReactNode
  handleClose: () => void
  className?: string
  isLarge?: boolean
  forceAction?: boolean
}

export type ModalWindowProps = BaseModalWindowProps & JSX.IntrinsicElements['div']

export const ModalWindowForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ModalWindowProps
> = (
  {
    modalId,
    className,
    children,
    handleClose,
    isLarge = false,
    forceAction = false,
    ...divProps
  },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-modal',
    {
      'usa-modal--lg': isLarge,
    },
    className
  )

  return (
    <div
      {...divProps}
      data-testid="modalWindow"
      className={classes}
      ref={ref}
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

export const ModalWindow = forwardRef(ModalWindowForwardRef)

export default ModalWindow

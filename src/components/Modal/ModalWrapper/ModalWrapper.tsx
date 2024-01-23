import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseModalWrapperProps {
  id: string
  children: React.ReactNode
  isVisible: boolean
  forceAction: boolean
  handleClose: () => void
  className?: string
}

export type ModalWrapperProps = BaseModalWrapperProps &
  JSX.IntrinsicElements['div']

export const ModalWrapperForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ModalWrapperProps
> = (
  { id, children, isVisible, forceAction, className, handleClose, ...divProps },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-modal-wrapper',
    {
      'is-visible': isVisible,
      'is-hidden': !isVisible,
    },
    className
  )

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div {...divProps} ref={ref} id={id} className={classes} role="dialog">
      <div
        data-testid="modalOverlay"
        className="usa-modal-overlay"
        onClick={forceAction ? undefined : handleClose}
        aria-controls={id}>
        {children}
      </div>
    </div>
  )
}

export const ModalWrapper = forwardRef(ModalWrapperForwardRef)

export default ModalWrapper

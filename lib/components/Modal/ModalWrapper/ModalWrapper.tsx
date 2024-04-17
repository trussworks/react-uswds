import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type ModalWrapperProps = {
  id: string
  children: React.ReactNode
  isVisible: boolean
  forceAction: boolean
  handleClose: () => void
  className?: string
} & JSX.IntrinsicElements['div']

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

const ModalWrapper = forwardRef(ModalWrapperForwardRef)

export default ModalWrapper

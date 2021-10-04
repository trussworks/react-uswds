import React, { forwardRef } from 'react'
import classnames from 'classnames'

interface ModalWrapperProps {
  id: string
  children: React.ReactNode
  isVisible: boolean
  forceAction: boolean
  handleClose: () => void
  className?: string
}

export const ModalWrapper = forwardRef(
  (
    {
      id,
      children,
      isVisible,
      forceAction,
      className,
      handleClose,
      ...divProps
    }: ModalWrapperProps & JSX.IntrinsicElements['div'],
    ref: React.ForwardedRef<HTMLDivElement>
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
)

export default ModalWrapper

import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type ModalFooterProps = JSX.IntrinsicElements['div']

export const ModalFooterForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ModalFooterProps
> = ({ children, className, ...divProps }, ref): React.ReactElement => {
  const classes = classnames('usa-modal__footer', className)

  return (
    <div ref={ref} className={classes} data-testid="modalFooter" {...divProps}>
      {children}
    </div>
  )
}

export const ModalFooter = forwardRef(ModalFooterForwardRef)

export default ModalFooter

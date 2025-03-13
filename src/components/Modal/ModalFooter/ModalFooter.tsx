import React, { type JSX } from 'react'
import classnames from 'classnames'

interface ModalFooterProps {
  children: React.ReactNode
  className?: string
}

export const ModalFooter = ({
  children,
  className,
  ...divProps
}: ModalFooterProps & JSX.IntrinsicElements['div']): JSX.Element => {
  const classes = classnames('usa-modal__footer', className)

  return (
    <div className={classes} data-testid="modalFooter" {...divProps}>
      {children}
    </div>
  )
}

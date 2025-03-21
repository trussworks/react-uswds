import React, { type JSX } from 'react'
import classnames from 'classnames'

interface ModalFooterPropsInterface {
  children: React.ReactNode
  className?: string
}

export type ModalFooterProps = ModalFooterPropsInterface &
  JSX.IntrinsicElements['div']

export const ModalFooter = ({
  children,
  className,
  ...divProps
}: ModalFooterProps): JSX.Element => {
  const classes = classnames('usa-modal__footer', className)

  return (
    <div className={classes} data-testid="modalFooter" {...divProps}>
      {children}
    </div>
  )
}

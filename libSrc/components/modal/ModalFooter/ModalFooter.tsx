import React from 'react'
import classnames from 'classnames'

export interface BaseModalFooterProps {
  children: React.ReactNode
  className?: string
}

export type ModalFooterProps = BaseModalFooterProps &
  JSX.IntrinsicElements['div']

const ModalFooter = ({
  children,
  className,
  ...divProps
}: ModalFooterProps): React.ReactElement => {
  const classes = classnames('usa-modal__footer', className)

  return (
    <div className={classes} data-testid="modalFooter" {...divProps}>
      {children}
    </div>
  )
}

export default ModalFooter

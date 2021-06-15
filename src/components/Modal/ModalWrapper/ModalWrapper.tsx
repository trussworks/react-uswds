import React from 'react'
import classnames from 'classnames'

interface ModalWrapperProps {
  children: React.ReactNode
  className?: string
}

export const ModalWrapper = ({
  children,
  className,
  ...divProps
}: ModalWrapperProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-modal-wrapper', className)

  return (
    <div className={classes} data-testid="modalWrapper" {...divProps}>
      {children}
    </div>
  )
}

export default ModalWrapper

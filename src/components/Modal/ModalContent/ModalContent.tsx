import React from 'react'
import classnames from 'classnames'

interface ModalContentProps {
  children: React.ReactNode
  className?: string
}

export const ModalContent = ({
  children,
  className,
  ...divProps
}: ModalContentProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-modal__content', className)

  return (
    <div className={classes} data-testid="modalContent" {...divProps}>
      {children}
    </div>
  )
}

export default ModalContent

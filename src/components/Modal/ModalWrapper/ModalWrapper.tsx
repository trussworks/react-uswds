import React from 'react'
import classnames from 'classnames'

interface ModalWrapperProps {
  children: React.ReactNode
  isVisible: boolean
  className?: string
}

export const ModalWrapper = ({
  children,
  isVisible,
  className,
  ...divProps
}: ModalWrapperProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(
    'usa-modal-wrapper',
    {
      'is-visible': isVisible,
      'is-hidden': !isVisible,
    },
    className
  )

  return (
    <div className={classes} data-testid="modalWrapper" {...divProps}>
      {children}
    </div>
  )
}

export default ModalWrapper

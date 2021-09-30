import React from 'react'
import classnames from 'classnames'

interface ModalWrapperProps {
  children: React.ReactNode
  isVisible: boolean
  className?: string
}

// Copy attributes from Modal
// Render into a portal
// Toggle body classes

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
    <div {...divProps} className={classes} role="dialog">
      <div className="usa-modal-overlay">{children}</div>
    </div>
  )
}

export default ModalWrapper

import React from 'react'
import classnames from 'classnames'

interface ModalProps {
  children: React.ReactNode
  className?: string
  isLarge?: boolean
}

export const ModalNew = ({
  className,
  children,
  isLarge = false,
  ...props
}: ModalProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(
    'usa-modal',
    {
      'usa-modal--lg': isLarge,
    },
    className
  )
  return (
    <div data-testid="modal" className={classes} {...props}>
      {children}
    </div>
  )
}

export default ModalNew

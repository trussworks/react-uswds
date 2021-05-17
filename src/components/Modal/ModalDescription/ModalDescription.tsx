import React from 'react'
import classnames from 'classnames'

interface ModalDescriptionProps {
  children: React.ReactNode
  className?: string
}

export const ModalDescription = ({
  children,
  className,
  ...divProps
}: ModalDescriptionProps &
  JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-modal__main', className)

  return (
    <div className={classes} data-testid="modalDescription" {...divProps}>
      {children}
    </div>
  )
}

export default ModalDescription

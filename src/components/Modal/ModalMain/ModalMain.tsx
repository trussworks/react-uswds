import React from 'react'

import classnames from 'classnames'

interface ModalMainProps {
  children: React.ReactNode
  className?: string
  isLarge?: boolean
}

export const ModalMain = ({
  className,
  children,
  isLarge = false,
  ...divProps
}: ModalMainProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-modal__main', className)
  return (
    <div data-testid="modalMain" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default ModalMain

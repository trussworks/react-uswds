import classnames from 'classnames'
import React, { ReactNode, type JSX } from 'react'

interface IconListContentProps {
  className?: string
  children?: ReactNode
}

export const IconListContent = ({
  className,
  children,
  ...divProps
}: IconListContentProps & JSX.IntrinsicElements['div']): JSX.Element => {
  const classes = classnames(className, 'usa-icon-list__content')

  return (
    <div className={classes} {...divProps} data-testid="iconListContent">
      {children}
    </div>
  )
}

export default IconListContent

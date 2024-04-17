import classnames from 'classnames'
import React, { ReactElement, ReactNode } from 'react'

export type IconListContentProps = {
  className?: string
  children?: ReactNode
} & JSX.IntrinsicElements['div']

const IconListContent = ({
  className,
  children,
  ...divProps
}: IconListContentProps): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__content')

  return (
    <div className={classes} {...divProps} data-testid="iconListContent">
      {children}
    </div>
  )
}

export default IconListContent

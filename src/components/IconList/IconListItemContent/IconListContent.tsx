import classnames from 'classnames'
import React, { ReactElement, ReactNode } from 'react'

interface IconListContentProps {
  className?: string
  children?: ReactNode
}

export const IconListContent = ({
  className,
  children,
}: IconListContentProps & JSX.IntrinsicElements['div']): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__content')

  return <div className={classes}>{children}</div>
}

export default IconListContent

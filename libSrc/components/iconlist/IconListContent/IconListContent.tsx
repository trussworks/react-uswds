import classnames from 'classnames'
import React, { type ReactElement, type ReactNode } from 'react'

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
    <div className={classes} data-testid="iconListContent" {...divProps}>
      {children}
    </div>
  )
}

export default IconListContent

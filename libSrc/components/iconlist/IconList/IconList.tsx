import React, { type ReactElement } from 'react'
import classnames from 'classnames'

export interface BaseIconListProps {
  children: React.ReactNode
  className?: string
}

export type IconListProps = BaseIconListProps & JSX.IntrinsicElements['ul']

const IconList = ({
  children,
  className,
  ...props
}: IconListProps): ReactElement => {
  const classes = classnames(className, 'usa-icon-list')

  return (
    <ul className={classes} data-testid="iconList" {...props}>
      {children}
    </ul>
  )
}

export default IconList

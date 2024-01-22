import React, { ReactElement } from 'react'
import classnames from 'classnames'

export type IconListProps = JSX.IntrinsicElements['ul']

export const IconList = ({
  children,
  className,
}: IconListProps): ReactElement => {
  const classes = classnames(className, 'usa-icon-list')

  return (
    <ul className={classes} data-testid="iconList">
      {children}
    </ul>
  )
}

export default IconList

import classnames from 'classnames'
import React, { ReactElement } from 'react'

export type IconListContentProps = JSX.IntrinsicElements['div']

export const IconListContent = ({
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

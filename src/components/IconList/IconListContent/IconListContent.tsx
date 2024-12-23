import classnames from 'classnames'
import React, { ReactElement, ReactNode, type JSX } from 'react';

interface IconListContentProps {
  className?: string
  children?: ReactNode
}

export const IconListContent = ({
  className,
  children,
  ...divProps
}: IconListContentProps & JSX.IntrinsicElements['div']): ReactElement<any> => {
  const classes = classnames(className, 'usa-icon-list__content')

  return (
    <div className={classes} {...divProps} data-testid="iconListContent">
      {children}
    </div>
  )
}

export default IconListContent

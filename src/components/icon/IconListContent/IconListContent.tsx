import classnames from 'classnames'
import React, { ReactElement, forwardRef } from 'react'

export type IconListContentProps = JSX.IntrinsicElements['div']

export const IconListContentForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IconListContentProps
> = ({ className, children, ...divProps }, ref): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__content')

  return (
    <div
      ref={ref}
      className={classes}
      {...divProps}
      data-testid="iconListContent">
      {children}
    </div>
  )
}

const IconListContent = forwardRef(IconListContentForwardRef)

export default IconListContent

import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type MediaBlockBodyProps = JSX.IntrinsicElements['div']

export const MediaBlockBodyForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, MediaBlockBodyProps> = ({
  children,
  className,
  ...divProps
}, ref): ReactElement => {
  const classes = classNames('usa-media-block__body', className)

  return (
    <div ref={ref} className={classes} {...divProps}>
      {children}
    </div>
  )
}

export const MediaBlockBody = forwardRef(MediaBlockBodyForwardRef)

export default MediaBlockBody
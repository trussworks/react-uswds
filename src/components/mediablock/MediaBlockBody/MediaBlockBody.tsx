import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type MediaBlockBodyProps = React.ComponentPropsWithRef<
  typeof MediaBlockBody
>

export type MediaBlockBodyRef = React.ComponentRef<typeof MediaBlockBody>

export const MediaBlockBodyForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
> = ({ className, ...props }, ref): ReactElement => {
  const classes = classNames('usa-media-block__body', className)

  return <div ref={ref} className={classes} {...props} />
}

const MediaBlockBody = forwardRef(MediaBlockBodyForwardRef)

export default MediaBlockBody

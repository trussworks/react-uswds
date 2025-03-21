import React, { type JSX } from 'react'
import classNames from 'classnames'

export type MediaBlockBodyProps = JSX.IntrinsicElements['div']

export const MediaBlockBody = ({
  children,
  className,
  ...divProps
}: MediaBlockBodyProps): JSX.Element => {
  const classes = classNames('usa-media-block__body', className)

  return (
    <div className={classes} {...divProps}>
      {children}
    </div>
  )
}

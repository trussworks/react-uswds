import React, { type JSX } from 'react'
import classnames from 'classnames'

export type CollectionProps = {
  condensed?: boolean
} & JSX.IntrinsicElements['ul']

export const Collection = ({
  children,
  className,
  condensed,
  ...ulProps
}: CollectionProps): JSX.Element => {
  const classes = classnames(
    'usa-collection',
    { 'usa-collection--condensed': condensed },
    className
  )
  return (
    <ul className={classes} data-testid="collection" {...ulProps}>
      {children}
    </ul>
  )
}

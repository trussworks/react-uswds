import React, { JSX } from 'react'
import classnames from 'classnames'

type CollectionProps = {
  condensed?: boolean
}

export const Collection = ({
  children,
  className,
  condensed,
  ...ulProps
}: CollectionProps & JSX.IntrinsicElements['ul']): React.ReactElement => {
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

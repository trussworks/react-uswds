import React from 'react'
import classnames from 'classnames'

export interface BaseCollectionProps {
  condensed?: boolean
}

export type CollectionProps = BaseCollectionProps & JSX.IntrinsicElements['ul']

const Collection = ({
  children,
  className,
  condensed,
  ...ulProps
}: CollectionProps): React.ReactElement => {
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

export default Collection

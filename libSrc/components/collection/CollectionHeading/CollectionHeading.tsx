import React from 'react'
import classnames from 'classnames'
import type { HeadingLevel } from '../../../types/headingLevel.js'

export interface BaseCollectionHeadingProps {
  headingLevel: HeadingLevel
}

export type CollectionHeadingProps = BaseCollectionHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

const CollectionHeading = ({
  headingLevel,
  className,
  children,
  ...props
}: CollectionHeadingProps): React.ReactElement => {
  const Heading = headingLevel

  const classes = classnames('usa-collection__heading', className)
  return (
    <Heading className={classes} {...props}>
      {children}
    </Heading>
  )
}

export default CollectionHeading

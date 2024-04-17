import React from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../types/headingLevel'

export type CollectionHeadingProps = {
  headingLevel: HeadingLevel
} & React.DetailedHTMLProps<
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

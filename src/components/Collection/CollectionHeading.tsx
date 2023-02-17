import React from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../types/headingLevel'
interface CollectionHeadingProps {
  headingLevel: HeadingLevel
}
export const CollectionHeading = ({
  headingLevel,
  className,
  children,
  ...props
}: CollectionHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >): React.ReactElement => {
  const Heading = headingLevel

  const classes = classnames('usa-collection__heading', className)
  return (
    <Heading className={classes} {...props}>
      {children}
    </Heading>
  )
}

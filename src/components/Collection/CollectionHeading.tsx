import React, { type JSX } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../types/headingLevel'

interface CollectionHeadingPropsInterface {
  headingLevel: HeadingLevel
}

export type CollectionHeadingProps = CollectionHeadingPropsInterface &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

export const CollectionHeading = ({
  headingLevel,
  className,
  children,
  ...props
}: CollectionHeadingProps): JSX.Element => {
  const Heading = headingLevel

  const classes = classnames('usa-collection__heading', className)
  return (
    <Heading className={classes} {...props}>
      {children}
    </Heading>
  )
}

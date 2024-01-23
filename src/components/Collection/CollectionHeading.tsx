import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../types/headingLevel'

export interface BaseCollectionHeadingProps {
  headingLevel: HeadingLevel
}

export type CollectionHeadingProps = BaseCollectionHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

export const CollectionHeadingForwardRef: React.ForwardRefRenderFunction<HTMLHeadingElement, CollectionHeadingProps> = ({
  headingLevel,
  className,
  children,
  ...props
}, ref): React.ReactElement => {
  const Heading = headingLevel

  const classes = classnames('usa-collection__heading', className)
  return (
    <Heading ref={ref} className={classes} {...props}>
      {children}
    </Heading>
  )
}

export const CollectionHeading = forwardRef(CollectionHeadingForwardRef)

export default CollectionHeading
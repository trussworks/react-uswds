import React from 'react'
import classnames from 'classnames'
interface CollectionHeadingProps {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export const CollectionHeading = ({
  headingLevel,
  className,
  children,
  ...props
}: CollectionHeadingProps &
  JSX.IntrinsicElements['h3']): React.ReactElement => {
  const Heading = headingLevel

  const classes = classnames('usa-collection__heading', className)
  return (
    <Heading className={classes} {...props}>
      {children}
    </Heading>
  )
}

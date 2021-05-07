import React from 'react'
import classnames from 'classnames'
interface CollectionHeadingProps {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export const CollectionHeading = ({
  headingLevel,
  className,
  children,
  ...props
}: CollectionHeadingProps &
  JSX.IntrinsicElements['h3']): React.ReactElement => {
  const Component = headingLevel || 'h3'
  const classes = classnames('usa-collection__heading', className)
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

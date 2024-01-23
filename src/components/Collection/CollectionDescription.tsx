import React, { forwardRef } from 'react'
import classname from 'classnames'

export type CollectionDescriptionProps = JSX.IntrinsicElements['p']

export const CollectionDescriptionForwardRef: React.ForwardRefRenderFunction<HTMLParagraphElement, CollectionDescriptionProps> = ({
  className,
  children,
  ...props
}, ref): React.ReactElement => {
  const classes = classname('usa-collection__description', className)
  return (
    <p ref={ref} className={classes} {...props}>
      {children}
    </p>
  )
}

export const CollectionDescription = forwardRef(CollectionDescriptionForwardRef)

export default CollectionDescription
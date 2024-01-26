import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BreadcrumbListProps = React.ComponentPropsWithRef<
  typeof BreadcrumbList
>

export type BreadcrumbListRef = React.ComponentRef<typeof BreadcrumbList>

export const BreadcrumbListForwardRef: React.ForwardRefRenderFunction<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
> = ({ className, ...props }, ref): React.ReactElement => {
  const classes = classnames('usa-breadcrumb__list', className)

  return <ol ref={ref} className={classes} {...props} />
}

const BreadcrumbList = forwardRef(BreadcrumbListForwardRef)

export default BreadcrumbList

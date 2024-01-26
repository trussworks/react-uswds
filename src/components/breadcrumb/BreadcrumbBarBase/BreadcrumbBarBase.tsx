import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseBreadcrumbBarBaseProps = {
  variant?: 'default' | 'wrap'
  className?: string
}

export type BreadcrumbBarBaseProps = React.ComponentPropsWithRef<
  typeof BreadcrumbBarBase
>

export type BreadcrumbBarBaseRef = React.ComponentRef<typeof BreadcrumbBarBase>

export const BreadcrumbBarBaseForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  BaseBreadcrumbBarBaseProps & React.ComponentPropsWithoutRef<'nav'>
> = ({ variant = 'default', className, ...props }, ref): React.ReactElement => {
  const classes = classnames(
    'usa-breadcrumb',
    {
      'usa-breadcrumb--wrap': variant === 'wrap',
    },
    className
  )

  return (
    <nav
      ref={ref}
      className={classes}
      aria-label="Breadcrumbs"
      data-testid="breadcrumbs"
      {...props}
    />
  )
}

const BreadcrumbBarBase = forwardRef(BreadcrumbBarBaseForwardRef)

export default BreadcrumbBarBase

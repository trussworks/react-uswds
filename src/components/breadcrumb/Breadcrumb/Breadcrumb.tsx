import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseBreadcrumbProps {
  children: React.ReactNode
  className?: string
  current?: boolean
}

export type BreadcrumbProps = BaseBreadcrumbProps & JSX.IntrinsicElements['li']

export const BreadcrumbForwardRef: React.ForwardRefRenderFunction<
  HTMLLIElement,
  BreadcrumbProps
> = (
  { children, current = false, className, ...listItemProps },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-breadcrumb__list-item',
    {
      'usa-current': current,
    },
    className
  )

  return (
    <li
      ref={ref}
      className={classes}
      aria-current={current ? 'page' : undefined}
      {...listItemProps}>
      {children}
    </li>
  )
}

export const Breadcrumb = forwardRef(BreadcrumbForwardRef)

export default Breadcrumb

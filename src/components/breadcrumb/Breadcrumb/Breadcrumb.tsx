import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseBreadcrumbProps {
  children: React.ReactNode
  className?: string
  /**
   * @deprecated Use `isCurrent` instead
   */
  current?: boolean
  isCurrent?: boolean
}

export type BreadcrumbProps = React.ComponentPropsWithRef<typeof Breadcrumb>

export type BreadcrumbRef = React.ComponentRef<typeof Breadcrumb>

export const BreadcrumbForwardRef: React.ForwardRefRenderFunction<
  HTMLLIElement,
  BaseBreadcrumbProps & React.ComponentPropsWithoutRef<'li'>
> = (
  { children, current = false, isCurrent = false, className, ...props },
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
      aria-current={isCurrent || current ? 'page' : undefined}
      {...props}>
      {children}
    </li>
  )
}

const Breadcrumb = forwardRef(BreadcrumbForwardRef)

export default Breadcrumb

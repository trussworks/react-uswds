import React, { ReactElement, type JSX } from 'react'
import classnames from 'classnames'
import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb'

type BreadcrumbBarProps = {
  children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps>[]
  variant?: 'default' | 'wrap'
  className?: string
  navProps?: JSX.IntrinsicElements['nav']
  listProps?: JSX.IntrinsicElements['ol']
}

export const BreadcrumbBar = ({
  variant = 'default',
  children,
  className,
  navProps,
  listProps,
}: BreadcrumbBarProps): JSX.Element => {
  const classes = classnames(
    'usa-breadcrumb',
    {
      'usa-breadcrumb--wrap': variant === 'wrap',
    },
    className
  )

  return (
    <nav className={classes} aria-label="Breadcrumbs" {...navProps}>
      <ol className="usa-breadcrumb__list" {...listProps}>
        {children}
      </ol>
    </nav>
  )
}

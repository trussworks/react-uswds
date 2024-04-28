import React, { type ReactElement } from 'react'
import classnames from 'classnames'
import type { BreadcrumbProps } from '../Breadcrumb/Breadcrumb.js'

export type BaseBreadcrumbBarProps = {
  children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps>[]
  variant?: 'default' | 'wrap'
  className?: string
  navProps?: JSX.IntrinsicElements['nav']
  listProps?: JSX.IntrinsicElements['ol']
}

export type BreadcrumbBarProps = BaseBreadcrumbBarProps

const BreadcrumbBar = ({
  variant = 'default',
  children,
  className,
  navProps,
  listProps,
}: BreadcrumbBarProps): React.ReactElement => {
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

export default BreadcrumbBar

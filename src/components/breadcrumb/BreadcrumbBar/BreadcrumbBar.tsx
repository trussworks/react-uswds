import React, { ReactElement, type JSX } from 'react'
import classnames from 'classnames'
import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb'

export type BreadcrumbBarProps = {
  children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps>[]
  /** Wrap is the default behavior */
  variant?: 'default' | 'wrap' | 'truncate'
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
      'usa-breadcrumb--truncate': variant === 'truncate',
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

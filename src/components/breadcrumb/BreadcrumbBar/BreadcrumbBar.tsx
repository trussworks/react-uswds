import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb'

interface BreadcrumbBarProps {
  children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps>[]
  variant?: 'default' | 'wrap'
  className?: string
  navProps?: JSX.IntrinsicElements['nav']
  listProps?: JSX.IntrinsicElements['ol']
}

export const BreadcrumbBar = (
  props: BreadcrumbBarProps
): React.ReactElement => {
  const {
    variant = 'default',
    children,
    className,
    navProps,
    listProps,
  } = props
  const classes = classnames(
    'usa-breadcrumb',
    {
      'usa-breadcrumb--wrap': variant === 'wrap',
    },
    className
  )

  return (
    <nav className={classes} {...navProps} aria-label="Breadcrumbs">
      <ol className="usa-breadcrumb__list" {...listProps}>
        {children}
      </ol>
    </nav>
  )
}

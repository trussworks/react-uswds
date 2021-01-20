import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { BaseBreadcrumbProps } from '../Breadcrumb/Breadcrumb'

interface BreadcrumbBarProps {
  children:
    | ReactElement<BaseBreadcrumbProps>
    | ReactElement<BaseBreadcrumbProps>[]
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
  const uswdsClassName =
    variant === 'wrap'
      ? 'usa-breadcrumb usa-breadcrumb--wrap'
      : 'usa-breadcrumb'
  const classes = classnames(uswdsClassName, className)

  return (
    <nav className={classes} {...navProps} aria-label="Breadcrumbs">
      <ol className="usa-breadcrumb__list" {...listProps}>
        {children}
      </ol>
    </nav>
  )
}

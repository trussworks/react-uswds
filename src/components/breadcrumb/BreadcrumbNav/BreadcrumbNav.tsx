import React, { ReactElement } from 'react'
import classnames from 'classnames'

import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb'

interface BreadcrumbNavProps {
  variant?: 'default' | 'wrap'
  withMetaData?: boolean
  children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps>[]
}

export const BreadcrumbNav = (
  props: BreadcrumbNavProps & JSX.IntrinsicElements['nav']
): React.ReactElement => {
  const {
    variant = 'default',
    withMetaData = false,
    children,
    className,
    ...navProps
  } = props
  const uswdsClassName =
    variant === 'wrap'
      ? 'usa-breadcrumb usa-breadcrumb--wrap'
      : 'usa-breadcrumb'
  const classes = classnames(uswdsClassName, className)

  return (
    <nav className={classes} {...navProps} aria-label="Breadcrumbs">
      <ol className="usa-breadcrumb__list">{children}</ol>
    </nav>
  )
}

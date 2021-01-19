import React, { ReactElement } from 'react'
import classnames from 'classnames'

import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb'

interface BreadcrumbNavProps {
  variant?: 'default' | 'wrap'
  withMetaData?: boolean
  children: ReactElement<BreadcrumbProps>[]
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

  let breadcrumbs = children
  if (withMetaData) {
    breadcrumbs = children.map((child, index) =>
      React.cloneElement(child, {
        withMetaData: true,
        position: index + 1,
      })
    )
  }

  return (
    <nav className={classes} {...navProps} aria-label="Breadcrumbs">
      <ol
        vocab={withMetaData ? 'http://schema.org/' : undefined}
        className="usa-breadcrumb__list">
        {breadcrumbs}
      </ol>
    </nav>
  )
}

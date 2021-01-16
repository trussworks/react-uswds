import React from 'react'
import classnames from 'classnames'

export interface BreadcrumbProps {
  label: string
  href?: string
  current?: boolean
}

export const Breadcrumb = (
  props: BreadcrumbProps & JSX.IntrinsicElements['li']
): React.ReactElement => {
  const { label, href, current = false, className, ...listItemProps } = props

  if (current) {
    return (
      <li
        className={classnames(
          'usa-breadcrumb__list-item usa-current',
          className
        )}
        {...listItemProps}
        aria-current="page">
        <span>{label}</span>
      </li>
    )
  }

  return (
    <li
      className={classnames('usa-breadcrumb__list-item', className)}
      {...listItemProps}>
      <a href={href} className="usa-breadcrumb__link">
        <span>{label}</span>
      </a>
    </li>
  )
}

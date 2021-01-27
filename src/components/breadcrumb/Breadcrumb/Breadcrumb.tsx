import React from 'react'
import classnames from 'classnames'

export interface BaseBreadcrumbProps {
  children: React.ReactNode
  className?: string
  listItemProps?: JSX.IntrinsicElements['li']
}
interface BreadcrumbProps extends BaseBreadcrumbProps {
  current?: boolean
}

export const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  const { children, current = false, className, listItemProps } = props
  const classes = classnames(
    'usa-breadcrumb__list-item',
    {
      'usa-current': current,
    },
    className
  )

  return (
    <li
      className={classes}
      aria-current={current ? 'page' : undefined}
      {...listItemProps}>
      {children}
    </li>
  )
}

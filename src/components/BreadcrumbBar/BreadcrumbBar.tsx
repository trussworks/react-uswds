import React, { ReactElement } from 'react'
import classnames from 'classnames'

const metaData = {
  li: {
    property: 'itemListElement',
    typeof: 'ListItem',
  },
  a: {
    property: 'item',
    typeof: 'WebPage',
  },
  span: {
    property: 'name',
  },
}

const getMetaPositionTag = (
  position: number | undefined
): JSX.Element | undefined =>
  position ? (
    <meta property="position" content={position.toString()} />
  ) : undefined

type PageInfo = {
  pageName: string
  href: string
}

interface BreadcrumbBarProps {
  variant?: 'default' | 'wrap'
  withMetaData?: boolean
  pageName: string
  pageHierarchy: PageInfo[]
}

export const BreadcrumbBar = (
  props: BreadcrumbBarProps & JSX.IntrinsicElements['nav']
): React.ReactElement => {
  const {
    variant = 'default',
    withMetaData = false,
    pageName,
    pageHierarchy,
    className,
    ...navProps
  } = props
  const uswdsClassName =
    variant === 'wrap'
      ? 'usa-breadcrumb usa-breadcrumb--wrap'
      : 'usa-breadcrumb'
  const classes = classnames(uswdsClassName, className)

  const breadcrumbs = pageHierarchy.map((pageInfo, i) => (
    <li
      key={`breadcrumb-${i}`}
      property={metaData.li.property}
      typeof={metaData.li.typeof}
      className="usa-breadcrumb__list-item">
      <a
        property={metaData.a.property}
        typeof={metaData.a.typeof}
        href={pageInfo.href}
        className="usa-breadcrumb__link">
        <span property={metaData.span.property}>{pageInfo.pageName}</span>
        {withMetaData && getMetaPositionTag(i + 1)}
      </a>
    </li>
  ))

  const current = (
    <li
      property={metaData.li.property}
      typeof={metaData.li.typeof}
      className="usa-breadcrumb__list-item usa-current"
      aria-current="page">
      <span property={metaData.span.property}>{pageName}</span>
      {withMetaData && getMetaPositionTag(breadcrumbs.length + 1)}
    </li>
  )

  return (
    <nav className={classes} {...navProps} aria-label="Breadcrumbs">
      <ol
        vocab={withMetaData ? 'http://schema.org/' : undefined}
        className="usa-breadcrumb__list">
        {breadcrumbs}
        {current}
      </ol>
    </nav>
  )
}

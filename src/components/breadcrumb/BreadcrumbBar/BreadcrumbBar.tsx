import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { Breadcrumb, LinkingBreadcrumb } from '../Breadcrumb/Breadcrumb'

type PageInfo = {
  pageName: string
  href: string
}

interface BreadcrumbBarProps {
  variant?: 'default' | 'wrap'
  withRdfaMetaData?: boolean
  pageName: string
  pageHierarchy: PageInfo[]
}

export const BreadcrumbBar = (
  props: BreadcrumbBarProps & JSX.IntrinsicElements['nav']
): React.ReactElement => {
  const {
    variant = 'default',
    withRdfaMetaData = false,
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

  const linkingBreadcrumbs = pageHierarchy.map((pageInfo, i) => (
    <LinkingBreadcrumb
      key={`breadcrumb-${i}`}
      pageName={pageInfo.pageName}
      href={pageInfo.href}
      position={i + 1}
      withRdfaMetaData={withRdfaMetaData}
    />
  ))

  const currentPageBreadcrumb = (
    <Breadcrumb
      pageName={pageName}
      withRdfaMetaData={withRdfaMetaData}
      position={linkingBreadcrumbs.length + 1}
    />
  )

  return (
    <nav className={classes} {...navProps} aria-label="Breadcrumbs">
      <ol
        vocab={withRdfaMetaData ? 'http://schema.org/' : undefined}
        className="usa-breadcrumb__list">
        {linkingBreadcrumbs}
        {currentPageBreadcrumb}
      </ol>
    </nav>
  )
}

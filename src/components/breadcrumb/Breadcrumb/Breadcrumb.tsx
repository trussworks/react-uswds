import classnames from 'classnames'
import React from 'react'

const rdfaMetaData = {
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

const getMetaPositionTag = (position: number): JSX.Element => (
  <meta property="position" content={position.toString()} />
)

interface BreadcrumbProps {
  pageName: string
  position: number
  withRdfaMetaData?: boolean
}

export const Breadcrumb = (
  props: BreadcrumbProps & JSX.IntrinsicElements['li']
): JSX.Element => {
  const {
    pageName,
    position,
    withRdfaMetaData = false,
    className,
    ...listItemProps
  } = props
  const classes = classnames('usa-breadcrumb__list-item usa-current', className)

  return (
    <li
      property={rdfaMetaData.li.property}
      typeof={rdfaMetaData.li.typeof}
      className={classes}
      aria-current="page"
      {...listItemProps}>
      <span property={rdfaMetaData.span.property}>{pageName}</span>
      {withRdfaMetaData && getMetaPositionTag(position)}
    </li>
  )
}

interface LinkingBreadcrumbProps extends BreadcrumbProps {
  href: string
}

export const LinkingBreadcrumb = (
  props: LinkingBreadcrumbProps & JSX.IntrinsicElements['li']
): JSX.Element => {
  const {
    pageName,
    href,
    position,
    withRdfaMetaData = false,
    className,
    ...listItemProps
  } = props
  const classes = classnames('usa-breadcrumb__list-item', className)

  return (
    <li
      property={rdfaMetaData.li.property}
      typeof={rdfaMetaData.li.typeof}
      className={classes}
      {...listItemProps}>
      <a
        property={rdfaMetaData.a.property}
        typeof={rdfaMetaData.a.typeof}
        href={href}
        className="usa-breadcrumb__link">
        <span property={rdfaMetaData.span.property}>{pageName}</span>
        {withRdfaMetaData && getMetaPositionTag(position)}
      </a>
    </li>
  )
}

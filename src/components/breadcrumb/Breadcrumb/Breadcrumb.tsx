import React from 'react'
import classnames from 'classnames'

export interface BreadcrumbProps {
  label: string
  href?: string
  current?: boolean
  withMetaData?: boolean
  position?: number
}

export const Breadcrumb = (
  props: BreadcrumbProps & JSX.IntrinsicElements['li']
): React.ReactElement => {
  const {
    label,
    href,
    current = false,
    withMetaData = false,
    position = undefined,
    className,
    ...listItemProps
  } = props

  const assignMetaDataValue = (value: string): string | undefined => {
    return withMetaData ? value : undefined
  }

  const metaData = {
    li: {
      property: assignMetaDataValue('itemListElement'),
      typeof: assignMetaDataValue('ListItem'),
    },
    a: {
      property: assignMetaDataValue('item'),
      typeof: assignMetaDataValue('WebPage'),
    },
    span: {
      property: assignMetaDataValue('name'),
    },
  }

  const metaPositionTag = position ? (
    <meta property="position" content={position.toString()} />
  ) : undefined

  if (current) {
    return (
      <li
        property={metaData.li.property}
        typeof={metaData.li.typeof}
        className={classnames(
          'usa-breadcrumb__list-item usa-current',
          className
        )}
        {...listItemProps}
        aria-current="page">
        <span property={metaData.span.property}>{label}</span>
        {withMetaData && metaPositionTag}
      </li>
    )
  }

  return (
    <li
      property={metaData.li.property}
      typeof={metaData.li.typeof}
      className={classnames('usa-breadcrumb__list-item', className)}
      {...listItemProps}>
      <a
        property={metaData.a.property}
        typeof={metaData.a.typeof}
        href={href}
        className="usa-breadcrumb__link">
        <span property={metaData.span.property}>{label}</span>
        {withMetaData && metaPositionTag}
      </a>
    </li>
  )
}

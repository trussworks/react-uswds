import React from 'react'
import classnames from 'classnames'

export interface BreadcrumbProps {
  label: string
  href?: string
  current?: boolean
  withMetaData?: boolean
}

export const Breadcrumb = (
  props: BreadcrumbProps & JSX.IntrinsicElements['li']
): React.ReactElement => {
  const {
    label,
    href,
    current = false,
    withMetaData = false,
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
        <span property={withMetaData ? metaData.span.property : undefined}>
          {label}
          {/*TODO: Meta Position Prop*/}
        </span>
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
        <span property={metaData.span.property}>
          {label}
          {/*TODO: Meta Position Prop*/}
        </span>
      </a>
    </li>
  )
}

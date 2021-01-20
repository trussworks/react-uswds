import React from 'react'
import { BaseBreadcrumbProps, Breadcrumb } from '../Breadcrumb/Breadcrumb'
import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink'

interface LinkingBreadcrumbProps extends BaseBreadcrumbProps {
  href: string
  anchorProps?: JSX.IntrinsicElements['a']
  spanProps?: JSX.IntrinsicElements['span']
}

export const LinkingBreadcrumb = (
  props: LinkingBreadcrumbProps
): JSX.Element => {
  const { children, href, className, listItemProps, anchorProps } = props

  return (
    <Breadcrumb className={className} listItemProps={listItemProps}>
      <BreadcrumbLink href={href} anchorProps={anchorProps}>
        {children}
      </BreadcrumbLink>
    </Breadcrumb>
  )
}

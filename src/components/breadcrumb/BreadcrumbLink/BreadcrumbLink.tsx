import React from 'react'

interface BreadcrumbLinkProps {
  children: React.ReactNode
  href: string
}

export const BreadcrumbLink = (
  props: BreadcrumbLinkProps & JSX.IntrinsicElements['a']
): JSX.Element => {
  const { children, href, ...anchorProps } = props
  return (
    <a href={href} className="usa-breadcrumb__link" {...anchorProps}>
      {children}
    </a>
  )
}

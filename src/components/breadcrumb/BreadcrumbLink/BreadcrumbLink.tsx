import React from 'react'

interface BreadcrumbLinkProps {
  children: React.ReactNode
  href: string
  anchorProps?: JSX.IntrinsicElements['a']
  spanProps?: JSX.IntrinsicElements['span']
}

export const BreadcrumbLink = (props: BreadcrumbLinkProps): JSX.Element => {
  const { children, href, anchorProps } = props
  return (
    <a href={href} className="usa-breadcrumb__link" {...anchorProps}>
      {children}
    </a>
  )
}

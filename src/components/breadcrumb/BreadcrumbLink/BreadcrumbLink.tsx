import classnames from 'classnames'
import React from 'react'
import {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
  Link,
} from '../../Link/Link'

export function BreadcrumbLink(props: DefaultLinkProps): React.ReactElement<any>
export function BreadcrumbLink<T>(props: CustomLinkProps<T>): React.ReactElement<any>
export function BreadcrumbLink<FCProps = DefaultLinkProps>({
  className,
  ...passThroughProps
}: DefaultLinkProps | CustomLinkProps<FCProps>): React.ReactElement<any> {
  const classes = classnames(className, 'usa-breadcrumb__link')

  const linkProps = {
    ...passThroughProps,
    className: classes,
  } as DefaultLinkProps | CustomLinkProps<FCProps>

  if (isCustomProps(linkProps)) {
    return <Link<FCProps> {...linkProps} variant="unstyled" />
  }

  return <Link {...linkProps} variant="unstyled" />
}

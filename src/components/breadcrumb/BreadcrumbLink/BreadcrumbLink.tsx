import classnames from 'classnames'
import React from 'react'
import {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
  Link,
} from '../../Link/Link'

export function BreadcrumbLink(props: DefaultLinkProps): React.ReactElement
export function BreadcrumbLink<T>(props: CustomLinkProps<T>): React.ReactElement
export function BreadcrumbLink<FCProps = DefaultLinkProps>(
  props: DefaultLinkProps | CustomLinkProps<FCProps>
): React.ReactElement {
  const { className } = props
  const classes = classnames(className, 'usa-breadcrumb__link')

  if (isCustomProps(props)) {
    return <Link<FCProps> {...props} className={classes} variant="unstyled" />
  }

  return <Link {...props} className={classes} variant="unstyled" />
}

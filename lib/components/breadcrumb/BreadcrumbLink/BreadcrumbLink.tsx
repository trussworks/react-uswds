import classnames from 'classnames'
import React from 'react'
import Link, { CustomLinkProps, DefaultLinkProps } from '../../Link/Link'
import { isCustomProps } from '../../Link/utils'

export default function BreadcrumbLink(
  props: DefaultLinkProps
): React.ReactElement
export default function BreadcrumbLink<T>(
  props: CustomLinkProps<T>
): React.ReactElement
export default function BreadcrumbLink<FCProps = DefaultLinkProps>({
  className,
  ...passThroughProps
}: DefaultLinkProps | CustomLinkProps<FCProps>): React.ReactElement {
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

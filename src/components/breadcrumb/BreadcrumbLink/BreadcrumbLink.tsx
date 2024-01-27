import classnames from 'classnames'
import React from 'react'
import Link, {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
} from '../../Link/Link'

function BreadcrumbLink(props: DefaultLinkProps): React.ReactElement
function BreadcrumbLink<T>(props: CustomLinkProps<T>): React.ReactElement
function BreadcrumbLink<FCProps = DefaultLinkProps>({
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

export default BreadcrumbLink

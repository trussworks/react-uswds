import classnames from 'classnames'
import React from 'react'
import Link, {
  type CustomLinkProps,
  type DefaultLinkProps,
} from '../../Link/Link.js'
import { isCustomProps } from '../../Link/utils.js'

export type BreadcrumbDefaultLinkProps = DefaultLinkProps
export type BreadcrumbCustomLinkProps<T> = CustomLinkProps<T>
export type BreadcrumbLinkProps<T = DefaultLinkProps> =
  | DefaultLinkProps
  | CustomLinkProps<T>

function BreadcrumbLink(props: BreadcrumbLinkProps): React.ReactElement
function BreadcrumbLink<T>(props: CustomLinkProps<T>): React.ReactElement
function BreadcrumbLink<FCProps = DefaultLinkProps>({
  className,
  ...passThroughProps
}: BreadcrumbLinkProps): React.ReactElement {
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

import classnames from 'classnames'
import React, { forwardRef } from 'react'
import Link, {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
} from '../../Link/Link'

export type BreadcrumbLinkProps<FCProps = DefaultLinkProps> =
  | DefaultLinkProps
  | CustomLinkProps<FCProps>

export const BreadcrumbLinkForwardRef: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  BreadcrumbLinkProps
> = ({ className, ...passThroughProps }, ref): React.ReactElement => {
  const classes = classnames(className, 'usa-breadcrumb__link')

  const linkProps = {
    ...passThroughProps,
    className: classes,
  } as DefaultLinkProps | CustomLinkProps<FCProps>

  if (isCustomProps(linkProps)) {
    return <Link ref={ref} {...linkProps} variant="unstyled" />
  }

  return <Link ref={ref} {...linkProps} variant="unstyled" />
}

export const BreadcrumbLink = forwardRef(BreadcrumbLinkForwardRef)

export default BreadcrumbLink

import classnames from 'classnames'
import React, { forwardRef } from 'react'
import Link, {
  CustomLinkProps,
  DefaultLinkProps,
  LinkProps,
  LinkRef,
  isCustomProps,
} from '../../Link/Link'

export type BreadcrumbLinkProps = React.ComponentPropsWithRef<
  typeof BreadcrumbLink
>

export type BreadcrumbLinkRef = React.ComponentRef<typeof BreadcrumbLink>

export const BreadcrumbLinkForwardRef: React.ForwardRefRenderFunction<
  LinkRef,
  (DefaultLinkProps | CustomLinkProps<DefaultLinkProps>) &
    React.PropsWithoutRef<LinkProps>
> = ({ className, ...passThroughProps }, ref): React.ReactElement => {
  const classes = classnames(className, 'usa-breadcrumb__link')

  const linkProps = {
    ...passThroughProps,
    className: classes,
  } as DefaultLinkProps | CustomLinkProps<DefaultLinkProps>

  if (isCustomProps(linkProps)) {
    return <Link ref={ref} {...linkProps} variant="unstyled" />
  }

  return <Link ref={ref} {...linkProps} variant="unstyled" />
}

const BreadcrumbLink = forwardRef(BreadcrumbLinkForwardRef)

export default BreadcrumbLink

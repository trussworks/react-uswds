import React, { forwardRef } from 'react'
import classnames from 'classnames'

import Link, {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
} from '../../Link/Link'

export type IdentifierLinkProps<FCProps = DefaultLinkProps> =
  | DefaultLinkProps
  | CustomLinkProps<FCProps>

export const IdentifierLinkForwardRef: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  IdentifierLinkProps
> = ({ className, ...passThroughProps }, ref): React.ReactElement => {
  const classes = classnames(className, 'usa-identifier__required-link')
  const linkProps = {
    ...passThroughProps,
    className: classes,
  } as DefaultLinkProps | CustomLinkProps<FCProps>

  if (isCustomProps(linkProps)) {
    return <Link ref={ref} {...linkProps} />
  }

  return <Link ref={ref} {...linkProps} />
}

export const IdentifierLink = forwardRef(IdentifierLinkForwardRef)

export default IdentifierLink

import React from 'react'
import classnames from 'classnames'

import {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
  Link,
} from '../../Link/Link'

export function IdentifierLink(props: DefaultLinkProps): React.ReactElement
export function IdentifierLink<T>(props: CustomLinkProps<T>): React.ReactElement
export function IdentifierLink<FCProps = DefaultLinkProps>({
  className,
  ...passThroughProps
}: DefaultLinkProps | CustomLinkProps<FCProps>): React.ReactElement {
  const classes = classnames(
    className,
    'usa-identifier__required-link usa-link'
  )
  const linkProps = {
    ...passThroughProps,
    className: classes,
  } as DefaultLinkProps | CustomLinkProps<FCProps>

  if (isCustomProps(linkProps)) {
    return <Link<FCProps> {...linkProps} variant="unstyled" />
  }

  return <Link {...linkProps} variant="unstyled" />
}

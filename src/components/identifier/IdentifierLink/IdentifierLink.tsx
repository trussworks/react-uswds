import React, { type JSX } from 'react'
import classnames from 'classnames'

import {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
  Link,
} from '../../Link/Link'

export function IdentifierLink(props: DefaultLinkProps): JSX.Element
export function IdentifierLink<T>(props: CustomLinkProps<T>): JSX.Element
export function IdentifierLink<FCProps = DefaultLinkProps>({
  className,
  ...passThroughProps
}: DefaultLinkProps | CustomLinkProps<FCProps>): JSX.Element {
  const classes = classnames(className, 'usa-identifier__required-link')
  const linkProps = {
    ...passThroughProps,
    className: classes,
  } as DefaultLinkProps | CustomLinkProps<FCProps>

  if (isCustomProps(linkProps)) {
    return <Link<FCProps> {...linkProps} />
  }

  return <Link {...linkProps} />
}

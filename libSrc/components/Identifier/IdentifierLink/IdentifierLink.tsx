import React from 'react'
import classnames from 'classnames'

import Link, {
  type CustomLinkProps,
  type DefaultLinkProps,
} from '../../Link/Link.js'
import { isCustomProps } from '../../Link/utils.js'

export interface BaseIdentifierLinkProps {}

export type IdentifierLinkProps<T = DefaultLinkProps> =
  BaseIdentifierLinkProps & (DefaultLinkProps | CustomLinkProps<T>)

function IdentifierLink(props: DefaultLinkProps): React.ReactElement
function IdentifierLink<T>(props: CustomLinkProps<T>): React.ReactElement
function IdentifierLink<FCProps = DefaultLinkProps>({
  className,
  ...passThroughProps
}: IdentifierLinkProps<FCProps>): React.ReactElement {
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

export default IdentifierLink

import React from 'react'
import classnames from 'classnames'

import Link, { CustomLinkProps, DefaultLinkProps } from '../../Link/Link'
import { isCustomProps } from '../../Link/utils'

export default function IdentifierLink(
  props: DefaultLinkProps
): React.ReactElement
export default function IdentifierLink<T>(
  props: CustomLinkProps<T>
): React.ReactElement
export default function IdentifierLink<FCProps = DefaultLinkProps>({
  className,
  ...passThroughProps
}: DefaultLinkProps | CustomLinkProps<FCProps>): React.ReactElement {
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

import React from 'react'
import classnames from 'classnames'

import Link, {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
} from '../../Link/Link'

function IdentifierLink(props: DefaultLinkProps): React.ReactElement
function IdentifierLink<T>(props: CustomLinkProps<T>): React.ReactElement
function IdentifierLink<FCProps = DefaultLinkProps>({
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

export default IdentifierLink

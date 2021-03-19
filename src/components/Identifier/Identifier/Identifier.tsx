import React from 'react'
import classnames from 'classnames'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

const links = [
  <a key="identifierLinkGoogle" href="www.google.com">
    Google
  </a>,
  <a key="identifierLinkOrWhatever" href="www.google.com">
    google but with a small g
  </a>,
]

/* footer's primary section has the FooterNav and the Address components
   footer's secondary section has the Logo */

interface IdentifierProps {
  className?: string
  children: React.ReactNode
}

export const Identifier = ({
  className,
  children,
}: IdentifierProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(className)
  return (
    <div data-testid="identifier" className={classes}>
      Identifier component
      <IdentifierMasthead />
      <IdentifierLinks links={links} />
      <IdentifierGov />
    </div>
  )
}

export default Identifier

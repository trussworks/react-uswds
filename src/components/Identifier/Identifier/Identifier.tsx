import React from 'react'
import classnames from 'classnames'
// import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
// import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
// import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

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
  const classes = classnames('usa-identifier', className)
  return (
    <div data-testid="identifier" className={classes}>
      Identifier component
      {children}
    </div>
  )
}

export default Identifier

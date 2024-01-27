import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type IdentifierLogoProps = JSX.IntrinsicElements['a']

export const IdentifierLogoForwardRef: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  IdentifierLogoProps
> = ({ children, className, ...anchorProps }, ref): React.ReactElement => {
  const classes = classnames('usa-identifier__logo', className)
  return (
    <a ref={ref} className={classes} {...anchorProps}>
      {children}
    </a>
  )
}

const IdentifierLogo = forwardRef(IdentifierLogoForwardRef)

export default IdentifierLogo

import React from 'react'
import classnames from 'classnames'

export interface BaseIdentifierLinksProps {
  className?: string
  navProps?: JSX.IntrinsicElements['nav']
  listProps?: JSX.IntrinsicElements['ul']
}

export type IdentifierLinksProps =
  React.PropsWithChildren<BaseIdentifierLinksProps>

const IdentifierLinks = ({
  children,
  className,
  navProps,
  listProps,
}: IdentifierLinksProps): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--required-links',
    className
  )

  return (
    <nav className={classes} {...navProps}>
      <div className="usa-identifier__container">
        <ul className="usa-identifier__required-links-list" {...listProps}>
          {children}
        </ul>
      </div>
    </nav>
  )
}

export default IdentifierLinks

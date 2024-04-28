import React from 'react'
import classnames from 'classnames'

export interface BaseHeaderProps {
  basic?: boolean
  extended?: boolean
  basicWithMegaMenu?: boolean
  children: React.ReactNode
  showMobileOverlay?: boolean
}

export type HeaderProps = BaseHeaderProps & JSX.IntrinsicElements['header']

const Header = ({
  basic,
  extended,
  basicWithMegaMenu,
  children,
  showMobileOverlay,
  className,
  ...headerProps
}: HeaderProps): React.ReactElement => {
  const classes = classnames(
    'usa-header',
    {
      'usa-header--basic': basic,
      'usa-header--megamenu': basicWithMegaMenu,
      'usa-header--extended': extended,
    },
    className
  )
  const overlayClasses = classnames('usa-overlay', {
    'is-visible': showMobileOverlay,
  })

  return (
    <>
      {showMobileOverlay !== undefined && (
        <div className={overlayClasses} data-testid="overlay"></div>
      )}
      <header data-testid="header" className={classes} {...headerProps}>
        {children}
      </header>
    </>
  )
}

export default Header

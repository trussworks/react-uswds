import React, { type JSX } from 'react'
import classnames from 'classnames'

type HeaderProps = {
  basic?: boolean
  extended?: boolean
  basicWithMegaMenu?: boolean
  children: React.ReactNode
  showMobileOverlay?: boolean
}

export const Header = ({
  basic,
  extended,
  basicWithMegaMenu,
  children,
  showMobileOverlay,
  className,
  ...headerProps
}: HeaderProps & JSX.IntrinsicElements['header']): JSX.Element => {
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

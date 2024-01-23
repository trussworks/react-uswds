import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseHeaderProps = {
  basic?: boolean
  extended?: boolean
  basicWithMegaMenu?: boolean
  children: React.ReactNode
  showMobileOverlay?: boolean
}

export type HeaderProps = BaseHeaderProps & JSX.IntrinsicElements['header']

export const HeaderForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  HeaderProps
> = (
  {
    basic,
    extended,
    basicWithMegaMenu,
    children,
    showMobileOverlay,
    className,
    ...headerProps
  },
  ref
): React.ReactElement => {
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
      <header
        ref={ref}
        data-testid="header"
        className={classes}
        {...headerProps}>
        {children}
      </header>
    </>
  )
}

export const Header = forwardRef(HeaderForwardRef)

export default Header

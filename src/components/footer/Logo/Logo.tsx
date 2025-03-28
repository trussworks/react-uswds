import React, { type JSX } from 'react'
import classnames from 'classnames'

export type LogoProps = {
  size?: 'big' | 'medium' | 'slim'
  heading?: React.ReactNode
  image: React.ReactNode
  className?: string
}
export const Logo = ({
  size,
  heading,
  image,
  className,
}: LogoProps): JSX.Element => {
  const isBig = size === 'big'
  const isMedium = size === 'medium'
  const isSlim = size === 'slim'

  const containerClasses = classnames(
    'usa-footer__logo grid-row',
    {
      'mobile-lg:grid-col-6 mobile-lg:grid-gap-2': isBig || isMedium,
      'grid-gap-2': isSlim,
    },
    className
  )

  const columnClasses = classnames({
    'mobile-lg:grid-col-auto': isBig || isMedium,
    'grid-col-auto': isSlim,
  })

  return (
    <div className={containerClasses} data-testid="footerLogo">
      <>
        <div className={columnClasses}>{image}</div>
        {heading && <div className={columnClasses}>{heading}</div>}
      </>
    </div>
  )
}

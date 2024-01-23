import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseLogoProps = {
  size?: 'big' | 'medium' | 'slim'
  heading?: React.ReactNode
  image: React.ReactNode
}

export type LogoProps = BaseLogoProps & JSX.IntrinsicElements['div']

export const LogoForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, LogoProps> = ({
  size,
  heading,
  image,
  className,
  ...elementAttributes
}, ref): React.ReactElement => {
  const isBig = size === 'big'
  const isMedium = size === 'medium'
  const isSlim = size === 'slim'

  const containerClasses = classnames(
    'usa-footer__logo grid-row',
    {
      'mobile-lg:grid-col-6 mobile-lg:grid-gap-2': isBig || isMedium,
      'grid-gap-2': isSlim,
    }, className
  )

  const columnClasses = classnames({
    'mobile-lg:grid-col-auto': isBig || isMedium,
    'grid-col-auto': isSlim,
  })

  return (
    <div ref={ref} className={containerClasses} data-testid="footerLogo" {...elementAttributes}>
      <>
        <div className={columnClasses}>{image}</div>
        {heading && <div className={columnClasses}>{heading}</div>}
      </>
    </div>
  )
}

export const Logo = forwardRef(LogoForwardRef)

export default Logo
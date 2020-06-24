import React from 'react'
import classnames from 'classnames'
import { deprecationWarning } from '../../../deprecation'

type LogoProps = {
  size?: 'big' | 'medium' | 'slim'
  /**
   * @deprecated since 1.6.0, use size
   */
  big?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
  medium?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
  slim?: boolean
  heading?: React.ReactNode
  image: React.ReactNode
}

export const Logo = ({
  size,
  big,
  medium,
  slim,
  heading,
  image,
  ...elementAttributes
}: LogoProps & React.HtmlHTMLAttributes<HTMLElement>): React.ReactElement => {
  if (big) {
    deprecationWarning('FooterNav property big is deprecated.  Use size')
  }
  if (medium) {
    deprecationWarning('FooterNav property medium is deprecated.  Use size')
  }
  if (slim) {
    deprecationWarning('FooterNav property slim is deprecated.  Use size')
  }
  const isBig = size ? size === 'big' : big
  const isMedium = size ? size === 'medium' : medium
  const isSlim = size ? size === 'slim' : slim

  const containerClasses = classnames(
    'usa-footer__logo grid-row',
    {
      'mobile-lg:grid-col-6 mobile-lg:grid-gap-2': isBig || isMedium,
      'grid-gap-2': isSlim,
    },
    elementAttributes.className
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

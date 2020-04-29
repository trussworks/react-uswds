import React from 'react'
import classnames from 'classnames'

type LogoProps = {
  big?: boolean
  medium?: boolean
  slim?: boolean
  heading?: React.ReactNode
  image: React.ReactNode
}

export const Logo = ({
  big,
  medium,
  slim,
  heading,
  image,
  ...elementAttributes
}: LogoProps & React.HtmlHTMLAttributes<HTMLElement>): React.ReactElement => {
  const containerClasses = classnames(
    'usa-footer__logo grid-row',
    {
      'mobile-lg:grid-col-6 mobile-lg:grid-gap-2': big || medium,
      'grid-gap-2': slim,
    },
    elementAttributes.className
  )

  return (
    <div className={containerClasses} data-testid="footerLogo">
      {heading ? (
        <>
          <div className="grid-col-auto">{image}</div>
          <div className="grid-col-auto">{heading}</div>
        </>
      ) : (
        <>{image}</>
      )}
    </div>
  )
}

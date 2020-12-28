import React from 'react'
import classnames from 'classnames'
import { deprecationWarning } from '../../../deprecation'

type AddressProps = {
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
  /*
     Contact info items - e.g. anchor tags or text for email, phone, website, etc.
   */
  items: React.ReactNode[]
}

export const Address = ({
  size,
  className,
  big,
  medium,
  slim,
  items,
}: AddressProps & React.HTMLAttributes<HTMLElement>): React.ReactElement => {
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

  const addressClasses = classnames('usa-footer__address', className)

  const itemClasses = classnames({
    'grid-col-auto': isBig || isMedium,
    'grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto': isSlim,
  })
  return (
    <address className={addressClasses}>
      {isSlim ? (
        <div className="grid-row grid-gap">
          {items.map((item, i) => (
            <div className={itemClasses} key={`addressItem-${i}`}>
              <div className="usa-footer__contact-info">{item}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="usa-footer__contact-info grid-row grid-gap">
          {items.map((item, i) => (
            <div className={itemClasses} key={`addressItem-${i}`}>
              {item}
            </div>
          ))}
        </div>
      )}
    </address>
  )
}

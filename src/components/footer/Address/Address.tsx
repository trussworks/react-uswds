import React, { type JSX } from 'react'
import classnames from 'classnames'

export type AddressProps = {
  size?: 'big' | 'medium' | 'slim'
  /*
     Contact info items - e.g. anchor tags or text for email, phone, website, etc.
   */
  items: React.ReactNode[]
} & React.HTMLAttributes<HTMLElement>

export const Address = ({
  size,
  className,
  items,
}: AddressProps): JSX.Element => {
  const isBig = size === 'big'
  const isMedium = size === 'medium'
  const isSlim = size === 'slim'

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

import React from 'react'
import classnames from 'classnames'
type AddressProps = {
  big?: boolean
  medium?: boolean
  slim?: boolean
  /* 
    Contact info items - e.g. anchor tags or text for email, phone, website, etc.
  */
  items: React.ReactNode[]
}

export const Address = ({
  big,
  medium,
  slim,
  items,
}: AddressProps & React.HTMLAttributes<HTMLElement>): React.ReactElement => {
  const itemClasses = classnames({
    'grid-col-auto': big || medium,
    'grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto': slim,
  })
  return (
    <address className="usa-footer__address">
      {slim ? (
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

import React from 'react'

type AddressProps = {
  /* 
    Contact info items - e.g. anchor tags or text for email, phone, website, etc.
  */
  items: React.ReactNode[]
}

export const Address = ({
  items,
}: AddressProps & React.HTMLAttributes<HTMLElement>): React.ReactElement => (
  <address className="usa-footer__address">
    <div className="grid-row grid-gap">
      {items.map((item, i) => (
        <div
          className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto"
          key={`addressItem-${i}`}>
          <div className="usa-footer__contact-info">{item}</div>
        </div>
      ))}
    </div>
  </address>
)

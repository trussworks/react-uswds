import React from 'react'
import {
  FooterExtendedNavList,
  ExtendedNavLinksType,
} from '../FooterExtendedNavList/FooterExtendedNavList'
import classnames from 'classnames'

function isExtendedNavLinks(
  links: React.ReactNode[] | ExtendedNavLinksType
): links is ExtendedNavLinksType {
  return (links as ExtendedNavLinksType)[0].constructor === Array
}

type FooterNavProps = {
  big?: boolean
  medium?: boolean
  slim?: boolean
  isMobile?: boolean
  /* 
    Array of navigation links. Displays in simple list or an extended list with columns.
    FooterExtendedNavList can only be used with multidimensional array (ExtendedNavLinksType) and "big" prop size.
  */
  links: React.ReactNode[] | ExtendedNavLinksType
}

export const FooterNav = ({
  className,
  big,
  medium,
  slim,
  isMobile,
  links,
  ...elementAttributes
}: FooterNavProps & React.HTMLAttributes<HTMLElement>): React.ReactElement => {
  const navClasses = classnames('usa-footer__nav', className)

  const listItemClasses = classnames(
    'desktop:grid-col-auto usa-footer__primary-content',
    {
      'mobile-lg:grid-col-4': big || medium,
      'mobile-lg:grid-col-6': slim,
    }
  )

  return (
    <nav className={navClasses} {...elementAttributes}>
      {big && isExtendedNavLinks(links) && (
        <FooterExtendedNavList isMobile={isMobile} nestedLinks={links} />
      )}

      {!isExtendedNavLinks(links) && (
        <ul className="grid-row grid-gap">
          {links.map((link, i) => (
            <li key={`navLink-${i}`} className={listItemClasses}>
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

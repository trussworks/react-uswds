import React from 'react'
import {
  FooterExtendedNavList,
  ExtendedNavLinksType,
} from '../FooterExtendedNavList/FooterExtendedNavList'
import classnames from 'classnames'
import { deprecationWarning } from '../../../deprecation'

function isExtendedNavLinks(
  links: React.ReactNode[] | ExtendedNavLinksType
): links is ExtendedNavLinksType {
  return (links as ExtendedNavLinksType)[0].constructor === Array
}

type FooterNavProps = {
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
  isMobile?: boolean
  /*
     Array of navigation links. Displays in simple list or an extended list with columns.
     FooterExtendedNavList can only be used with multidimensional array (ExtendedNavLinksType) and size="big" prop.
   */
  links: React.ReactNode[] | ExtendedNavLinksType
}

export const FooterNav = ({
  className,
  size,
  big,
  medium,
  slim,
  isMobile,
  links,
  ...elementAttributes
}: FooterNavProps & React.HTMLAttributes<HTMLElement>): React.ReactElement => {
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

  const navClasses = classnames('usa-footer__nav', className)

  const listItemClasses = classnames(
    'desktop:grid-col-auto usa-footer__primary-content',
    {
      'mobile-lg:grid-col-4': isBig || isMedium,
      'mobile-lg:grid-col-6': isSlim,
    }
  )

  return (
    <nav className={navClasses} {...elementAttributes}>
      {isBig && isExtendedNavLinks(links) && (
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

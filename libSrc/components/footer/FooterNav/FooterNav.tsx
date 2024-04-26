import React from 'react'
import FooterExtendedNavList, {
  type ExtendedNavLinksType,
} from '../FooterExtendedNavList/FooterExtendedNavList.js'
import classnames from 'classnames'
import { isExtendedNavLinks } from './utils.js'

export type FooterNavProps = {
  size?: 'big' | 'medium' | 'slim'
  isMobile?: boolean
  /*
     Array of navigation links. Displays in simple list or an extended list with columns.
     FooterExtendedNavList can only be used with multidimensional array (ExtendedNavLinksType) and size="big" prop.
   */
  links: React.ReactNode[] | ExtendedNavLinksType
} & JSX.IntrinsicElements['nav']

const FooterNav = ({
  className,
  size,
  isMobile,
  links,
  ...elementAttributes
}: FooterNavProps): React.ReactElement => {
  const isBig = size === 'big'
  const isMedium = size === 'medium'
  const isSlim = size === 'slim'

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

export default FooterNav

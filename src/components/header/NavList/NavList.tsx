import React from 'react'
import classnames from 'classnames'
import { deprecationWarning } from '../../../deprecation'

interface CustomNavListProps {
  items: React.ReactNode[]
  type?: 'primary' | 'secondary' | 'subnav' | 'megamenu' | 'footerSecondary'
  /**
   * @deprecated since 1.6.0, use size
   */
  primary?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
  secondary?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
  subnav?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
  megamenu?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
  footerSecondary?: boolean
}

export type NavListProps = CustomNavListProps & JSX.IntrinsicElements['ul']

export const NavList = ({
  items,
  type,
  primary,
  secondary,
  subnav,
  megamenu,
  footerSecondary,
  className,
  ...ulProps
}: NavListProps): React.ReactElement => {
  if (primary) {
    deprecationWarning('NavList property primary is deprecated.  Use type')
  }
  if (secondary) {
    deprecationWarning('NavList property secondary is deprecated.  Use type')
  }
  if (subnav) {
    deprecationWarning('NavList property subnav is deprecated.  Use type')
  }
  if (megamenu) {
    deprecationWarning('NavList property megamenu is deprecated.  Use type')
  }
  if (footerSecondary) {
    deprecationWarning(
      'NavList property footerSecondary is deprecated.  Use type'
    )
  }

  const isPrimary = type ? type === 'primary' : primary
  const isSecondary = type ? type === 'secondary' : secondary
  const isSubnav = type ? type === 'subnav' : subnav
  const isMegamenu = type ? type === 'megamenu' : megamenu
  const isFooterSecondary = type ? type === 'footerSecondary' : footerSecondary

  const ulClasses = classnames(
    {
      'usa-nav__primary usa-accordion': isPrimary,
      'usa-nav__secondary-links': isSecondary,
      'usa-nav__submenu': isSubnav,
      'usa-nav__submenu-list': isMegamenu,
      'usa-list usa-list--unstyled': isFooterSecondary,
    },
    className
  )

  const liClasses = classnames({
    'usa-nav__primary-item': isPrimary,
    'usa-nav__secondary-item': isSecondary,
    'usa-nav__submenu-item': isSubnav || isMegamenu,
    'usa-footer__secondary-link': isFooterSecondary,
  })

  return (
    <ul className={ulClasses} {...ulProps}>
      {items.map((item, i) => (
        <li key={`item_${i}`} className={liClasses}>
          {item}
        </li>
      ))}
    </ul>
  )
}

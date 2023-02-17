import React from 'react'
import classnames from 'classnames'

type CustomNavListProps = {
  items: React.ReactNode[]
  type?: 'primary' | 'secondary' | 'subnav' | 'megamenu' | 'footerSecondary'
}

export type NavListProps = CustomNavListProps & JSX.IntrinsicElements['ul']

export const NavList = ({
  items,
  type,
  className,
  ...ulProps
}: NavListProps): React.ReactElement => {
  const isPrimary = type === 'primary'
  const isSecondary = type === 'secondary'
  const isSubnav = type === 'subnav'
  const isMegamenu = type === 'megamenu'
  const isFooterSecondary = type === 'footerSecondary'

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

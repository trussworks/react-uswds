import React from 'react'
import classnames from 'classnames'

type FooterNavProps = {
  big?: boolean
  medium?: boolean
  slim?: boolean
  links: React.ReactNode[]
}

export const FooterNav = (
  props: FooterNavProps & React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const { medium, slim, links, ...elementAttributes } = props

  const navClasses = classnames(`usa-footer__nav`, elementAttributes.className)
  const listItemClasses = classnames(
    'desktop:grid-col-auto usa-footer__primary-content',
    {
      'mobile-lg:grid-col-4': medium,
      'mobile-lg:grid-col-6': slim,
    }
  )

  return (
    <nav className={navClasses} aria-label="Footer navigation">
      <ul className="grid-row grid-gap">
        {links.map((link, i) => (
          <li key={`navLink-${i}`} className={listItemClasses}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  )
}

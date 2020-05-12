import React from 'react'
import classnames from 'classnames'

type ExtendedNavLinks = [React.ReactNode[]]

type FooterNavProps = {
  big?: boolean
  medium?: boolean
  slim?: boolean
  /* 
    Union type. Array of navigation links or multidimensional array of ExtendedNavLinks.
    ExtendedNavLinks are ordered sub arrays that will be displayed as columns, with the first element used as the section heading.
    ExtendedNavLinks can only be used with "big" prop size
  */
  links: React.ReactNode[] | ExtendedNavLinks
}

function isExtendedNavLinks(
  links: React.ReactNode[] | ExtendedNavLinks
): links is ExtendedNavLinks {
  return (links as ExtendedNavLinks)[0].constructor === Array
}

export const FooterNav = ({
  className,
  big,
  medium,
  slim,
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
      {big && isExtendedNavLinks(links) && <ExtendedNav nestedLinks={links} />}

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

const Section = ({
  links,
}: {
  links: React.ReactNode[]
}): React.ReactElement => {
  const primaryLinkOrHeading = links[0]
  const secondaryLinks = links.slice(1)

  return (
    <section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
      <h4 className="usa-footer__primary-link">{primaryLinkOrHeading}</h4>
      <ul className="usa-list usa-list--unstyled">
        {secondaryLinks.map((link, i) => (
          <li key={`navLink-${i}`} className="usa-footer__secondary-link">
            {link}
          </li>
        ))}
      </ul>
    </section>
  )
}

const ExtendedNav = ({
  nestedLinks,
}: {
  nestedLinks: ExtendedNavLinks
}): React.ReactElement => {
  return (
    <div className="grid-row grid-gap-4">
      {nestedLinks.map((links, i) => (
        <div
          key={`linkSection-${i}`}
          className="mobile-lg:grid-col-6 desktop:grid-col-3">
          <Section links={links} />
        </div>
      ))}
    </div>
  )
}

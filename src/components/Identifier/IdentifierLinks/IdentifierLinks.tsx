import React from 'react'
import classnames from 'classnames'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'

type IdentifierLinksProps = {
  links: React.ReactNode[]
}

export const IdentifierLinks = (
  props: IdentifierLinksProps & JSX.IntrinsicElements['div']
): React.ReactElement => {
  const { className } = props
  // const { className, links } = props
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--required-links',
    className
  )
  return (
    <nav
      className={classes}
      data-testid="identifierLinks"
      aria-label="Important links">
      <div className="usa-identifier__container">
        <ul className="usa-identifier__required-links-list">
          {/* {links.map((link, i) => (
            <div
              key={`identifierLink${i}`}
              className="usa-identifier__required-links-item">
              {link}
            </div>
          ))} */}
          <IdentifierLinkItem />
          <li className="usa-identifier__required-links-item">
            <a href="www.google.com" className="usa-identifier__required-link">
              About &lt;Parent shortname&gt;
            </a>
          </li>
          <li className="usa-identifier__required-links-item">
            <a href="www.google.com" className="usa-identifier__required-link">
              Accessibility support
            </a>
          </li>
          <li className="usa-identifier__required-links-item">
            <a
              href="google.com"
              className="usa-identifier__required-link usa-link">
              FOIA requests
            </a>
          </li>
          <li className="usa-identifier__required-links-item">
            <a
              href="google.com"
              className="usa-identifier__required-link usa-link">
              No FEAR Act data
            </a>
          </li>
          <li className="usa-identifier__required-links-item">
            <a
              href="google.com"
              className="usa-identifier__required-link usa-link">
              Office of the Inspector General
            </a>
          </li>
          <li className="usa-identifier__required-links-item">
            <a
              href="google.com"
              className="usa-identifier__required-link usa-link">
              Performance reports
            </a>
          </li>
          <li className="usa-identifier__required-links-item">
            <a
              href="google.com"
              className="usa-identifier__required-link usa-link">
              Privacy policy
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default IdentifierLinks

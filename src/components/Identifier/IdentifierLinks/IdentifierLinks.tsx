import React from 'react'
import classnames from 'classnames'

type IdentifierLinksProps = {
  links: React.ReactNode[]
}

export const IdentifierLinks = (
  props: IdentifierLinksProps & JSX.IntrinsicElements['div']
): React.ReactElement => {
  const { className, links } = props
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
        IdentifierLinks:
        <ul className="usa-identifier__required-links-list ">
          {links.map((link, i) => (
            <div
              key={`identifierLink${i}`}
              className="usa-identifier__required-links-item">
              {link}
            </div>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default IdentifierLinks

/*
- IdentifierLinks  <Nav>
- Important links (class="usa-identifier__section usa-identifier__section--required-links”)
    - container
    - required links list
        - required links item(s)
*/

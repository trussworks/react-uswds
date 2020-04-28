import React, { useState } from 'react'
import classnames from 'classnames'

type ExtendedDropDownLinkProps = {
  label: string
  items: React.ReactNode[][]
  id: string
}

export const ExtendedDropDownLink = (
  props: ExtendedDropDownLinkProps
): React.ReactElement => {
  const { label, items, id } = props

  const [expanded, setExpanded] = useState(false)

  const classes = classnames('usa-nav__submenu-list')

  return (
    <>
      <button
        className="usa-accordion__button usa-nav__link"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={(): void => setExpanded((prvExpanded) => !prvExpanded)}>
        <span>{label}</span>
      </button>

      <div className="usa-nav__submenu usa-megamenu" hidden={!expanded}>
        <div className="grid-row grid-gap-4">
          {items.map((item, i) => (
            <div className="usa-col" key={`subnav_col_${i}`}>
              <ul className={classes}>
                {item.map((listItem, i) => (
                  <li
                    key={`subnav_item_${i}`}
                    className="usa-nav__submenu-item">
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ExtendedDropDownLink

import React from 'react'

import { List } from '../List/List'

type ExtendedDropDownLinkProps = {
  label: string
  items: React.ReactNode[][]
  id: string
  isOpen: boolean
  onToggle: () => void
}

export const ExtendedDropDownLink = (
  props: ExtendedDropDownLinkProps
): React.ReactElement => {
  const { label, items, id, isOpen, onToggle } = props
  return (
    <>
      <button
        className="usa-accordion__button usa-nav__link"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={(): void => onToggle()}>
        <span>{label}</span>
      </button>

      <div className="usa-nav__submenu usa-megamenu" hidden={!isOpen}>
        <div className="grid-row grid-gap-4">
          {items.map((listItems, i) => (
            <div className="usa-col" key={`subnav_col_${i}`}>
              <List
                items={listItems}
                keyPrefix="subnav_item"
                ulClass="usa-nav__submenu-list"
                liClass="usa-nav__submenu-item"
                hidden={!isOpen}></List>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ExtendedDropDownLink

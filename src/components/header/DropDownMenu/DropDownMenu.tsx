import React, { useState } from 'react'

import { List } from '../List/List'

type DropDownLinkProps = {
  label: string
  items: React.ReactNode[]
  id: string
}

export const DropDownLink = (props: DropDownLinkProps): React.ReactElement => {
  const { label, items, id } = props

  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <button
        className="usa-accordion__button usa-nav__link"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={(): void => setExpanded((prvExpanded) => !prvExpanded)}>
        <span>{label}</span>
      </button>
      <List
        items={items}
        keyPrefix="subnav_item"
        ulClass="usa-nav__submenu"
        liClass="usa-nav__submenu-item"
        hidden={!expanded}></List>
    </>
  )
}

export default DropDownLink

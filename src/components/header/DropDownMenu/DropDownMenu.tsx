import React from 'react'
import { List } from '../List/List'

type DropDownLinkProps = {
  label: string
  items: React.ReactNode[]
  id: string
  isOpen: boolean
  onToggle: () => void
}

export const DropDownLink = (props: DropDownLinkProps): React.ReactElement => {
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
      <List
        items={items}
        keyPrefix="subnav_item"
        ulClass="usa-nav__submenu"
        liClass="usa-nav__submenu-item"
        hidden={!isOpen}></List>
    </>
  )
}

export default DropDownLink

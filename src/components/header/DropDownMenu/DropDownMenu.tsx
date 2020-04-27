import React, { useState } from 'react'
import classnames from 'classnames'

type DropDownLinkProps = {
  label: string
  items: React.ReactNode[]
  id: string
}

export const DropDownLink = (props: DropDownLinkProps): React.ReactElement => {
  const { label, items, id } = props

  const [expanded, setExpanded] = useState(false)

  const classes = classnames('usa-nav__submenu')

  return (
    <>
      <button
        className="usa-accordion__button usa-nav__link"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={(): void => setExpanded((prvExpanded) => !prvExpanded)}>
        <span>{label}</span>
      </button>
      <ul className={classes} hidden={!expanded}>
        {items.map((item, i) => (
          <li key={`subnav_item_${i}`} className="usa-nav__submenu-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default DropDownLink

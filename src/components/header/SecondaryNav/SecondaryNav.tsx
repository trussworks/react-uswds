import React from 'react'
import classnames from 'classnames'

type SecondaryNavProps = {
  label: string
  items: React.ReactNode[]
}

export const SecondaryNav = ({
  label,
  items,
}: SecondaryNavProps): React.ReactElement => {
  const classes = classnames('usa-nav__submenu')

  return (
    <>
      <button
        className="usa-accordion__button usa-nav__link"
        aria-expanded="true"
        aria-controls="basic-nav-section-one">
        <span>{label}</span>
      </button>
      <ul className={classes}>
        {items.map((item, i) => (
          <li key={`primarynav_item_${i}`} className="usa-nav__submenu-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default SecondaryNav

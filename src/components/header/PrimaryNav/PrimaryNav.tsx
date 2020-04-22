import React from 'react'
import classnames from 'classnames'
import { SearchInput } from '../SearchInput/SearchInput'

type PrimaryNavProps = {
  items: React.ReactNode[]
}

export const PrimaryNav = ({ items }: PrimaryNavProps): React.ReactElement => {
  const classes = classnames('usa-nav')

  return (
    <nav className={classes}>
      <button className="usa-nav__close">
        <img src="/assets/img/close.svg" alt="close" />
      </button>
      <ul className="usa-nav__primary usa-accordion">
        {items.map((item, i) => (
          <li key={`primarynav_item_${i}`} className="usa-nav__primary-item">
            {item}
          </li>
        ))}
      </ul>
      <SearchInput></SearchInput>
    </nav>
  )
}

export default PrimaryNav

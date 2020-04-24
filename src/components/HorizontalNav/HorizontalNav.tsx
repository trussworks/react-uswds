import React from 'react'

import styles from './HorizontalNav.module.scss'

type HorizontalNavProps = {
  items: React.ReactNode[]
}

export const HorizontalNav = ({
  items,
}: HorizontalNavProps): React.ReactElement => {
  return (
    <nav className={styles.HorizontalNav} data-testid="horizontalnav">
      <ul>
        {items.map((item, i) => (
          <li key={`horizontalnav_item_${i}`}>{item}</li>
        ))}
      </ul>
    </nav>
  )
}

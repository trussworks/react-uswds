import React from 'react'

interface ListProps {
  items: React.ReactNode[]
  keyPrefix: string
  ulClass?: string
  liClass?: string
}

// Should the UL or LI html attributes be passed in?
export const List = (
  props: ListProps & React.HTMLAttributes<HTMLUListElement>
): React.ReactElement => {
  const { items, keyPrefix, ulClass, liClass, ...ulProps } = props

  return (
    <ul className={ulClass} {...ulProps}>
      {items.map((item, i) => (
        <li key={`${keyPrefix}_${i}`} className={liClass}>
          {item}
        </li>
      ))}
    </ul>
  )
}

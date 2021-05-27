import React from 'react'

import classnames from 'classnames'

interface IconListProps {
  // children: React.ReactElement<IconListItemProps>[]
  children: React.ReactNode
  className?: string
  themeColor?: string
}

export const IconList = ({
  className,
  children,
  themeColor,
  ...props
}: IconListProps & JSX.IntrinsicElements['ul']): React.ReactElement => {
  const classes = classnames(
    'usa-icon-list',
    {
      [`usa-icon-list--${themeColor}`]: themeColor !== undefined,
    },
    className
  )

  return (
    <>
      <h4>icon list</h4>
      <div>
        <ul className={classes} {...props}>
          <li className="usa-icon-list__item">{children}</li>
          <li className="usa-icon-list__item">icon 2</li>
          <li className="usa-icon-list__item">icon 3</li>
        </ul>
      </div>
    </>
  )
}

export default IconList

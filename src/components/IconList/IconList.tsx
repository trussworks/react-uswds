import React from 'react'

import classnames from 'classnames'

interface IconListProps {
  className?: string
  children: React.ReactNode
  // children: React.ReactElement<IconListItemProps>[]
}

export const IconList = ({
  className,
  children,
  ...props
}: IconListProps & JSX.IntrinsicElements['ul']): React.ReactElement => {
  const classes = classnames('usa-icon-list', className)

  return (
    <>
      <h4>icon list</h4>
      <div>
        <ul className={classes} {...props}>
          <li className="usa-icon-list__item">{children}</li>
          <li>icon 2</li>
          <li>icon 3</li>
        </ul>
      </div>
    </>
  )
}

export default IconList

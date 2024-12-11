import { ReactElement, ReactNode, JSX } from 'react'
import classnames from 'classnames'

interface IconListItemProps {
  className?: string
  children: ReactNode
}

export const IconListItem = ({
  className,
  children,
  ...liProps
}: IconListItemProps & JSX.IntrinsicElements['li']): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__item')

  return (
    <li className={classes} {...liProps} data-testid="iconListItem">
      {children}
    </li>
  )
}

export default IconListItem

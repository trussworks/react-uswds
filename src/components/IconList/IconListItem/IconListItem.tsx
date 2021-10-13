import React, { ComponentType, ReactElement, ReactNode } from 'react'
import classnames from 'classnames'
import { IconProps } from '../../Icon/Icon'

interface IconListItemProps {
  icon: ComponentType<IconProps>
  iconClassName?: string
  iconDivClassName?: string
  contentDivClassName?: string
  className?: string
  children: ReactNode
}

export const IconListItem = ({
  icon,
  iconClassName,
  iconDivClassName,
  contentDivClassName,
  className,
  children,
}: IconListItemProps & JSX.IntrinsicElements['li']): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__item')
  const iconClasses = classnames(iconDivClassName, 'usa-icon-list__icon') // TODO: Extract into own component (whether or not that is externally exposed)?
  const contentClasses = classnames(
    // TODO: Extract into own component (whether or not that is externally exposed)?
    contentDivClassName,
    'usa-icon-list__content'
  )
  const Icon = icon

  return (
    <li className={classes}>
      <div className={iconClasses}>
        <Icon className={iconClassName} />
      </div>
      <div className={contentClasses}>{children}</div>
    </li>
  )
}

export default IconListItem

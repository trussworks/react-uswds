import React from 'react'
import classnames from 'classnames'

import { icons, IconKeys } from './icons'
import sprite from 'uswds/src/img/sprite.svg'

interface IconProps {
  name: string
  focusable?: boolean
  role?: string
  size?: 3 | 4 | 5 | 6 | 7 | 8 | 9
  className?: string
}
export const Icon = ({
  name,
  focusable = false,
  role = 'img',
  size,
  className,
  ...iconProps
}: IconProps & JSX.IntrinsicElements['svg']): React.ReactElement => {
  // use size variant in classes ie usa-icon--size-3
  const classes = classnames(
    'usa-icon',
    // {
    //   sizeClass: size,
    // },
    className
  )

  return (
    <>
      <svg
        data-testid="iconComponent"
        className={classes}
        focusable={focusable}
        role={role}
        {...iconProps}>
        <use href={`${sprite}#${name}`}></use>
      </svg>
    </>
  )
}
export default Icon

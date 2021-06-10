import React from 'react'
import classnames from 'classnames'

import { icons, IconKeys } from './icons'
import sprite from 'uswds/src/img/sprite.svg'

interface IconProps {
  name: IconKeys
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
  const classes = classnames(
    'usa-icon',
    {
      [`usa-icon--size-${size}`]: size !== undefined,
    },
    className
  )

  // eslint-disable-next-line security/detect-object-injection
  if (icons[name] === undefined) {
    console.warn('The icon name entered does not match a known USWDS Icon')
  }

  // eslint-disable-next-line security/detect-object-injection
  const pathToSvg = `${sprite}#${icons[name]}`

  return (
    <>
      <svg
        data-testid="iconComponent"
        className={classes}
        focusable={focusable}
        role={role}
        {...iconProps}>
        <use href={pathToSvg}></use>
      </svg>
    </>
  )
}
export default Icon

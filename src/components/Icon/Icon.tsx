import React from 'react'
import classnames from 'classnames'

import sprite from 'uswds/src/img/sprite.svg'

// import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

// import accessibilityNew from 'uswds/src/img/usa-icons/accessibility_new.svg'

// import SvgIconDotGov from './icon-dot-gov-TEST'

// import { icons, IconKeys } from './icons'

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
  // apply size variant to classes ie usa-icon--size-3
  const classes = classnames('usa-icon', className)

  const pathToSvg = sprite`#${name}`

  return (
    <>
      <svg
        data-testid="iconComponent"
        className={classes}
        focusable={focusable}
        role={role}
        viewBox={'0 0 100 100'}
        height={size}
        {...iconProps}>
        <use href={pathToSvg}></use>
      </svg>
    </>
  )
}
export default Icon

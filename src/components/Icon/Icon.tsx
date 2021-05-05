import React from 'react'
import classnames from 'classnames'

import sprite from 'uswds/src/img/sprite.svg'
import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

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
  const filePath = `${sprite}#${name}`

  console.log('filepath is borked: ', filePath)

  const classes = classnames('usa-icon', className)

  return (
    <>
      <svg
        data-testid="iconComponent"
        className={classes}
        focusable={focusable}
        role={role}
        height={size}
        {...iconProps}>
        <use xlinkHref={`uswds/src/img/sprite.svg#${name}`}></use>
      </svg>
      <img
        className="usa-banner__icon usa-media-block__img"
        src={sprite}
        role="img"
        alt=""
        aria-hidden="true"
      />
    </>
  )
}
export default Icon

// import accessibilityNew from 'uswds/src/img/usa-icons/accessibility_new.svg'

// import SvgIconDotGov from './icon-dot-gov-TEST'

// const filePath = sprite`#${name}`

// return <SvgIconDotGov className={classes} height={size} {...iconProps} />
// console.log('what is sprite anyways: ', sprite)
// what is sprite anyways:  static/media/node_modules/uswds/src/img/sprite.svg
// return (
//   <svg
//     data-testid="iconComponent"
//     className={classes}
//     height={size}
//     {...iconProps}>
//     <use xlinkHref={filePath}></use>
//   </svg>
// )
// return (
//   <img
//     className="usa-banner__icon usa-media-block__img"
//     src={sprite}
//     role="img"
//     alt=""
//     aria-hidden="true"
//   />
// )

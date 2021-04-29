import React from 'react'
import classnames from 'classnames'

import SvgIconDotGov from './icon-dot-gov-TEST'

interface IconProps {
  name: string
  size?: 3 | 4 | 5 | 6 | 7 | 8 | 9
  className?: string
}
export const Icon = ({
  name,
  size,
  className,
  ...iconProps
}: IconProps & JSX.IntrinsicElements['svg']): React.ReactElement => {
  const filePath = `uswds/src/img/${name}.svg`

  const classes = classnames('usa-icon', className)

  return (
    <>
      <SvgIconDotGov className={classes} height={size} {...iconProps} />
      <svg
        data-testid="iconComponent"
        className={classes}
        height={size}
        {...iconProps}>
        <use xlinkHref={filePath}></use>
      </svg>
    </>
  )
  // return (
  //     <svg
  //       data-testid="iconComponent"
  //       className={classes}
  //       height={size}
  //       {...iconProps}>
  //       <use xlinkHref={filePath}>
  //       </use>
  //     </svg>
  // )
}
export default Icon

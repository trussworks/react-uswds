import React from 'react'
import classnames from 'classnames'

import { GridItemProps, BreakpointKeys, breakpoints } from '../types'

export type GridProps = GridItemProps &
  {
    [P in BreakpointKeys]?: GridItemProps
  }

export type GridLayoutProp = {
  gridLayout?: GridProps
}

export const getGridClasses = (
  itemProps: GridItemProps,
  breakpoint?: BreakpointKeys
): string => {
  // This should be fine bc TypeScript
  // eslint-disable-next-line security/detect-object-injection
  const prefix = breakpoint ? `${breakpoints[breakpoint]}:` : ''
  const { row, col, gap, offset } = itemProps

  // TODO - what happens if row/gap classes conflict?
  return classnames({
    [`${prefix}grid-row`]: row,
    [`${prefix}grid-gap`]: gap === true,
    [`${prefix}grid-gap-${gap}`]: gap !== true && !!gap,
    [`${prefix}grid-col`]: col === true,
    [`${prefix}grid-col-${col}`]: col !== true && !!col,
    [`${prefix}grid-offset-${offset}`]: !!offset,
  })
}

export const applyGridClasses = (gridLayout: GridProps): string => {
  let classes = getGridClasses(gridLayout)

  Object.keys(breakpoints).forEach((b) => {
    const bp = b as BreakpointKeys
    if (Object.prototype.hasOwnProperty.call(gridLayout, bp)) {
      const bpProps = gridLayout[bp] as GridItemProps
      classes = classnames(classes, getGridClasses(bpProps, bp))
    }
  })

  return classes
}

export const Grid = ({
  children,
  className,
  ...props
}: GridProps & React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  const {
    // defaults
    row,
    col,
    gap,
    offset,
    // breakpoint specific
    mobile,
    mobileLg,
    tablet,
    tabletLg,
    desktop,
    desktopLg,
    widescreen,
    // other
    ...otherProps
  } = props

  let classes = getGridClasses(props)

  Object.keys(breakpoints).forEach((b) => {
    const bp = b as BreakpointKeys
    if (Object.prototype.hasOwnProperty.call(props, bp)) {
      const bpProps = props[bp] as GridItemProps
      classes = classnames(classes, getGridClasses(bpProps, bp))
    }
  })

  // Pass in any custom classes
  classes = classnames(classes, className)

  return (
    <div className={classes} data-testid="grid" {...otherProps}>
      {children}
    </div>
  )
}

import React from 'react'
import classnames from 'classnames'

import { GridItemProps, BreakpointKeys, breakpoints } from '../types'

export type GridProps = GridItemProps &
  {
    [P in BreakpointKeys]?: GridItemProps
  }

export type GridComponentProps<T> = GridProps & { className?: string } & T

export type GridLayoutProp = {
  gridLayout?: GridProps
}

interface WithCustomGridProps<T> {
  asCustom: React.FunctionComponent<T>
}

export type DefaultGridProps = GridComponentProps<JSX.IntrinsicElements['div']>

export type CustomGridProps<T> = GridComponentProps<
  React.PropsWithChildren<T>
> &
  WithCustomGridProps<React.PropsWithChildren<T>>

type omittedProps =
  | 'mobile'
  | 'tablet'
  | 'desktop'
  | 'widescreen'
  | 'mobileLg'
  | 'tabletLg'
  | 'desktopLg'
  | 'children'
  | 'className'
  | 'row'
  | 'col'
  | 'gap'
  | 'offset'

export function isCustomProps<T>(
  props:
    | Omit<DefaultGridProps, omittedProps>
    | Omit<CustomGridProps<T>, omittedProps>
): props is Omit<CustomGridProps<T>, omittedProps> {
  return 'asCustom' in props
}

export const getGridClasses = (
  itemProps: GridItemProps = {},
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
      // eslint-disable-next-line security/detect-object-injection
      const bpProps = gridLayout[bp] as GridItemProps
      classes = classnames(classes, getGridClasses(bpProps, bp))
    }
  })

  return classes
}

export function Grid(props: DefaultGridProps): React.ReactElement
export function Grid<T>(props: CustomGridProps<T>): React.ReactElement
export function Grid<FCProps = DefaultGridProps>(
  props: DefaultGridProps | CustomGridProps<FCProps>
): React.ReactElement {
  const {
    children,
    className,
    row,
    col,
    gap,
    offset,
    mobile,
    mobileLg,
    tablet,
    tabletLg,
    desktop,
    desktopLg,
    widescreen,
    ...otherProps
  } = props

  const itemProps = {
    row,
    col,
    gap,
    offset,
  }

  const breakpointProps = {
    mobile,
    mobileLg,
    tablet,
    tabletLg,
    desktop,
    desktopLg,
    widescreen,
  }

  let classes = getGridClasses(itemProps)

  Object.keys(breakpoints).forEach((b) => {
    const bp = b as BreakpointKeys
    if (Object.prototype.hasOwnProperty.call(breakpointProps, bp)) {
      // eslint-disable-next-line security/detect-object-injection
      const bpProps = props[bp] as GridItemProps
      classes = classnames(classes, getGridClasses(bpProps, bp))
    }
  })

  classes = classnames(classes, className)

  if (isCustomProps(otherProps)) {
    const { asCustom, ...remainingProps } = otherProps

    const gridProps: FCProps = (remainingProps as unknown) as FCProps
    return React.createElement(
      asCustom,
      {
        className: classes,
        ...gridProps,
      },
      children
    )
  } else {
    return (
      <div className={classes} data-testid="grid" {...otherProps}>
        {children}
      </div>
    )
  }
}

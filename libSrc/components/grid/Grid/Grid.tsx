import React from 'react'
import classnames from 'classnames'

import type { GridItemProps, BreakpointKeys } from '../types.js'
import { getGridClasses, isCustomProps } from './utils.js'
import { breakpoints } from '../constants.js'

export type GridBreakpointProps = GridItemProps & {
  [P in BreakpointKeys]?: GridItemProps
}

export type BaseGridProps<T> = GridBreakpointProps & {
  className?: string
} & T

export type GridLayoutProps = {
  gridLayout?: GridBreakpointProps
}

export interface WithCustomGridProps<T> {
  asCustom: React.FunctionComponent<T>
}

export type DefaultGridProps = BaseGridProps<JSX.IntrinsicElements['div']>

export type CustomGridProps<T> = BaseGridProps<React.PropsWithChildren<T>> &
  WithCustomGridProps<React.PropsWithChildren<T>>

export type GridProps<T = DefaultGridProps> =
  | DefaultGridProps
  | CustomGridProps<T>

export type omittedProps =
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

export default function Grid(props: DefaultGridProps): React.ReactElement
export default function Grid<T>(props: CustomGridProps<T>): React.ReactElement
export default function Grid<FCProps = DefaultGridProps>(
  props: GridProps<FCProps>
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

    const gridProps: FCProps = remainingProps as unknown as FCProps
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

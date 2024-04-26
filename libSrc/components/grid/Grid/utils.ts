import classnames from 'classnames'
import type { GridItemProps, BreakpointKeys } from '../types.js'
import type {
  DefaultGridProps,
  omittedProps,
  CustomGridProps,
  GridBreakpointProps,
} from './Grid.js'
import { breakpoints } from '../constants.js'

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

export const applyGridClasses = (gridLayout: GridBreakpointProps): string => {
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

import React from 'react'

import type { ContainerSizes } from '../types.js'
import { isCustomProps, gridContainerClasses } from './utils.js'

export interface WithCustomGridContainerProps<T> {
  asCustom: React.FunctionComponent<T>
}

export type BaseGridContainerProps = {
  containerSize?: ContainerSizes
  className?: string
  children: React.ReactNode
}

export type DefaultGridContainerProps = BaseGridContainerProps

export type CustomGridContainerProps<T> = BaseGridContainerProps &
  WithCustomGridContainerProps<T>

export type GridContainerProps<T = BaseGridContainerProps> =
  | DefaultGridContainerProps
  | CustomGridContainerProps<T>

export default function GridContainer(
  props: DefaultGridContainerProps
): React.ReactElement
export default function GridContainer<T>(
  props: CustomGridContainerProps<T>
): React.ReactElement
export default function GridContainer<
  FCProps extends React.PropsWithChildren<object> = DefaultGridContainerProps,
>(props: GridContainerProps<FCProps>): React.ReactElement {
  if (isCustomProps(props)) {
    const { className, containerSize, asCustom, children, ...remainingProps } =
      props
    const gridContainerProps: FCProps = remainingProps as unknown as FCProps
    const classes = gridContainerClasses(className, containerSize)
    return React.createElement(
      asCustom,
      {
        'data-testid': 'gridContainer',
        className: classes,
        ...gridContainerProps,
      },
      children
    )
  } else {
    const { className, containerSize, children, ...gridContainerProps } = props

    const classes = gridContainerClasses(className, containerSize)
    return (
      <div
        data-testid="gridContainer"
        className={classes}
        {...gridContainerProps}>
        {children}
      </div>
    )
  }
}

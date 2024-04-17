import React from 'react'

import { ContainerSizes } from '../types'
import { isCustomProps, gridContainerClasses } from './utils'

export type GridContainerProps = {
  containerSize?: ContainerSizes
  className?: string
  children: React.ReactNode
}

export interface WithCustomGridContainerProps<T> {
  asCustom: React.FunctionComponent<T>
}

export type DefaultGridContainerProps = GridContainerProps

export type CustomGridContainerProps<T> = GridContainerProps &
  WithCustomGridContainerProps<T>

export default function GridContainer(
  props: DefaultGridContainerProps
): React.ReactElement
export default function GridContainer<T>(
  props: CustomGridContainerProps<T>
): React.ReactElement
export default function GridContainer<
  FCProps extends React.PropsWithChildren<object> = DefaultGridContainerProps,
>(
  props: DefaultGridContainerProps | CustomGridContainerProps<FCProps>
): React.ReactElement {
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

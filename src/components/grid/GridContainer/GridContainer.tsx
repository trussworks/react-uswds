import React from 'react'
import classnames from 'classnames'

import { ContainerSizes } from '../types'

export type BaseGridContainerProps = {
  containerSize?: ContainerSizes
  className?: string
  children: React.ReactNode
}

export interface WithCustomGridContainerProps<T> {
  asCustom: React.FunctionComponent<T>
}

export type DefaultGridContainerProps = BaseGridContainerProps

export type CustomGridContainerProps<T> = BaseGridContainerProps &
  WithCustomGridContainerProps<T>

export function isCustomProps<T>(
  props: DefaultGridContainerProps | CustomGridContainerProps<T>
): props is CustomGridContainerProps<T> {
  return 'asCustom' in props
}

export function gridContainerClasses(
  className: BaseGridContainerProps['className'],
  containerSize: BaseGridContainerProps['containerSize']
): string | undefined {
  const classes = classnames(
    {
      'grid-container': !containerSize,
      [`grid-container-${containerSize}`]: !!containerSize,
    },
    className
  )
  return classes
}

export type GridContainerProps<
  FCProps extends React.PropsWithChildren<object> = DefaultGridContainerProps
> = DefaultGridContainerProps | CustomGridContainerProps<FCProps>

export function GridContainer(
  props: DefaultGridContainerProps
): React.ReactElement
export function GridContainer<T>(
  props: CustomGridContainerProps<T>
): React.ReactElement
export function GridContainer<
  FCProps extends React.PropsWithChildren<object> = DefaultGridContainerProps
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

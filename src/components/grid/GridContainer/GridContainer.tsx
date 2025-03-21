import React, { type JSX } from 'react'
import classnames from 'classnames'

import { ContainerSizes } from '../types'

type GridContainerProps<T> = {
  containerSize?: ContainerSizes
  className?: string
  children: React.ReactNode
} & T

interface WithCustomGridContainerProps<T> {
  asCustom: React.FunctionComponent<T>
}

export type DefaultGridContainerProps = GridContainerProps<
  JSX.IntrinsicElements['div']
>

export type CustomGridContainerProps<T> = GridContainerProps<T> &
  WithCustomGridContainerProps<T>

export function isCustomProps<T>(
  props: DefaultGridContainerProps | CustomGridContainerProps<T>
): props is CustomGridContainerProps<T> {
  return 'asCustom' in props
}

function gridContainerClasses(
  className: DefaultGridContainerProps['className'],
  containerSize: DefaultGridContainerProps['containerSize']
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

export function GridContainer(props: DefaultGridContainerProps): JSX.Element
export function GridContainer<T>(
  props: CustomGridContainerProps<T>
): JSX.Element
export function GridContainer<
  FCProps extends React.PropsWithChildren<object> = DefaultGridContainerProps,
>(
  props: DefaultGridContainerProps | CustomGridContainerProps<FCProps>
): JSX.Element {
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

import classnames from 'classnames'
import type {
  DefaultGridContainerProps,
  CustomGridContainerProps,
  GridContainerProps,
} from './GridContainer.js'

export function isCustomProps<T>(
  props: DefaultGridContainerProps | CustomGridContainerProps<T>
): props is CustomGridContainerProps<T> {
  return 'asCustom' in props
}

export function gridContainerClasses(
  className: GridContainerProps['className'],
  containerSize: GridContainerProps['containerSize']
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

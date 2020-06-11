import React from 'react'
import classnames from 'classnames'

import { ContainerSizes } from '../types'

type GridContainerProps = {
  containerSize?: ContainerSizes
}

const GridContainer = ({
  children,
  containerSize,
  className,
  ...props
}: GridContainerProps &
  React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  const classes = classnames(
    {
      'grid-container': !containerSize,
      [`grid-container-${containerSize}`]: !!containerSize,
    },
    className
  )

  return (
    <div className={classes} data-testid="gridContainer" {...props}>
      {children}
    </div>
  )
}

GridContainer.displayName = 'GridContainer'

export { GridContainer }

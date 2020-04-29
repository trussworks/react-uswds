import React from 'react'
import classnames from 'classnames'

import { ContainerSizes } from '../types'

type GridContainerProps = {
  containerSize?: ContainerSizes
}

export const GridContainer = ({
  children,
  containerSize,
  ...props
}: GridContainerProps &
  React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  const classes = classnames({
    'grid-container': !containerSize,
    [`grid-container-${containerSize}`]: !!containerSize,
  })

  return (
    <div className={classes} data-testid="gridContainer" {...props}>
      {children}
    </div>
  )
}

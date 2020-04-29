import React from 'react'
import classnames from 'classnames'

import { ColumnSizes, GapSizes, ColumnOffsets } from '../types'

interface GridColProps {
  row?: boolean
  col?: ColumnSizes
  gap?: GapSizes
  offset?: ColumnOffsets
}

interface GridProps extends GridColProps {
  // breakpoints
  mobile?: GridColProps
  mobileLg?: GridColProps
  tablet?: GridColProps
  // etc.
}

export const Grid = ({
  row,
  col,
  gap,
  offset,
  children,
  ...props
}: GridProps & React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  const classes = classnames({
    'grid-row': row,
    'grid-gap': gap === true,
    [`grid-gap-${gap}`]: !!gap,
    'grid-col': col === true,
    [`grid-col-${col}`]: !!col,
    [`grid-offset-${offset}`]: !!offset,
  })

  return (
    <div className={classes} data-testid="grid" {...props}>
      {children}
    </div>
  )
}

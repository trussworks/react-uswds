import React, { forwardRef } from 'react'
import classnames from 'classnames'

import styles from './TableBase.module.scss'

export type BaseTableBaseProps = {
  bordered?: boolean
  children: React.ReactNode
  fullWidth?: boolean
  fixed?: boolean
  striped?: boolean
  compact?: boolean
  stackedStyle?: 'none' | 'default' | 'headers'
}

export type TableBaseProps = React.ComponentPropsWithRef<typeof TableBase>

export type TableBaseRef = React.ComponentRef<typeof TableBase>

export const TableBaseForwardRef: React.ForwardRefRenderFunction<
  HTMLTableElement,
  BaseTableBaseProps & React.ComponentPropsWithoutRef<'table'>
> = (
  {
    bordered,
    className,
    fullWidth,
    fixed,
    striped,
    compact,
    stackedStyle = 'none',
    ...props
  },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-table',
    {
      'usa-table--borderless': !bordered,
      'width-full': fullWidth,
      [`${styles.fixed}`]: fixed,
      'usa-table--striped': striped,
      'usa-table--compact': compact,
      'usa-table--stacked': stackedStyle === 'default',
      'usa-table--stacked-header': stackedStyle === 'headers',
    },
    className
  )

  if (compact && stackedStyle !== 'none') {
    console.warn(
      'USWDS states that compact styling is not suitable for use with stacked variants. See USWDS Table component, Table variants for more information: https://designsystem.digital.gov/components/table'
    )
  }

  return <table ref={ref} className={classes} data-testid="table" {...props} />
}

const TableBase = forwardRef(TableBaseForwardRef)

export default TableBase

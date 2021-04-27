import React from 'react'
import classnames from 'classnames'

import styles from './Table.module.css'

interface TableProps {
  bordered?: boolean
  caption?: React.ReactNode
  children: React.ReactNode
  fullWidth?: boolean
  fixed?: boolean
  scrollable?: boolean
  striped?: boolean
  compact?: boolean
  stackedStyle?: 'none' | 'default' | 'headers'
}

export const Table = ({
  bordered,
  caption,
  children,
  fullWidth,
  fixed,
  scrollable,
  striped,
  compact,
  stackedStyle = 'none',
}: TableProps): React.ReactElement => {
  const classes = classnames('usa-table', {
    'usa-table--borderless': !bordered,
    [`${styles.fullwidth}`]: fullWidth,
    [`${styles.fixed}`]: fixed,
    'usa-table--striped': striped,
    'usa-table--compact': compact,
    'usa-table--stacked': stackedStyle === 'default',
    'usa-table--stacked-header': stackedStyle === 'headers',
  })

  if (compact && stackedStyle !== 'none') {
    console.warn(
      'USWDS states that compact styling is not suitable for use with stacked variants. See USWDS Table component, Table variants for more information: https://designsystem.digital.gov/components/table'
    )
  }

  const table = (
    <table className={classes} data-testid="table">
      {caption && <caption>{caption}</caption>}
      {children}
    </table>
  )

  return (
    <>
      {scrollable ? (
        <div
          data-testid="scrollable-table-container"
          className="usa-table-container--scrollable">
          {table}
        </div>
      ) : (
        table
      )}
    </>
  )
}

export default Table

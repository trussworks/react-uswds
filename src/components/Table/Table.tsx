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
  scrollable = false,
  striped = false,
  compact = false,
  stackedStyle = 'none',
}: TableProps): React.ReactElement => {
  const classes = classnames('usa-table', {
    'usa-table--borderless': !bordered,
    [`${styles.fullwidth}`]: fullWidth,
    [`${styles.fixed}`]: fixed,
    'usa-table--striped': striped,
    'usa-table--compact': compact && stackedStyle === 'none',
    'usa-table--stacked': stackedStyle === 'default',
    'usa-table--stacked-header': stackedStyle === 'headers',
  })

  return (
    <>
      {scrollable ? (
        <div
          data-testid="scrollable-table"
          className="usa-table-container--scrollable">
          <table className={classes} data-testid="table">
            {caption && <caption>{caption}</caption>}
            {children}
          </table>
        </div>
      ) : (
        <table className={classes} data-testid="table">
          {caption && <caption>{caption}</caption>}
          {children}
        </table>
      )}
    </>
  )
}

export default Table

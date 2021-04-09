import React from 'react'
import classnames from 'classnames'

import styles from './Table.module.css'

interface TableProps {
  bordered?: boolean
  caption?: React.ReactNode
  children: React.ReactNode
  fullWidth?: boolean
  fixed?: boolean
  scrollable?: boolean //default false
  striped?: boolean //default false
  compact?: boolean // used w scrollable & striped - "not suitable for use with stacked variants"
  stackedStyle?: 'none' | 'default' | 'headers' // default 'none'
}

export const Table = ({
  bordered,
  caption,
  children,
  fullWidth,
  fixed,
  scrollable = false, // default false -- adds usa-table-container--scrollable
  striped = false, // default false usa-table--striped
  compact = false, // default false
  stackedStyle = 'none',
}: TableProps): React.ReactElement => {
  const classes = classnames('usa-table', {
    'usa-table--borderless': !bordered,
    [`${styles.fullwidth}`]: fullWidth,
    [`${styles.fixed}`]: fixed,
    'usa-table--striped': striped,
    'usa-table--compact': compact,
  })
  const isScrollable = scrollable

  return (
    <>
      {isScrollable ? (
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

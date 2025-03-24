import React, { type JSX } from 'react'
import classnames from 'classnames'

import styles from './Table.module.scss'

export type TableProps = {
  bordered?: boolean
  caption?: React.ReactNode
  children: React.ReactNode
  className?: string
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
  className,
  fullWidth,
  fixed,
  scrollable,
  striped,
  compact,
  stackedStyle = 'none',
}: TableProps): JSX.Element => {
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

  const table = (
    <table className={classes} data-testid="table">
      {caption && <caption>{caption}</caption>}
      {children}
    </table>
  )

  /**
   * From https://designsystem.digital.gov/components/table:
   * Scrollable tables need to be focusable. When you use the
   * .usa-table-container--scrollable variant with a table, you must add the
   * tabindex="0" attribute to the scrollable element. This attribute assures
   * that users navigating with a keyboard are able to select and scroll the
   * table. tabindex="0" enables focus on elements that do not get focus by
   * default. This attribute does not change the tab order. It places the
   * element in the logical navigation flow.
   */

  return (
    <>
      {scrollable ? (
        <div
          data-testid="scrollable-table-container"
          className="usa-table-container--scrollable"
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}>
          {table}
        </div>
      ) : (
        table
      )}
    </>
  )
}

export default Table

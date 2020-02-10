import React from 'react'
import classnames from 'classnames'

import styles from './Table.module.css'

interface TableProps {
  bordered?: boolean
  caption?: React.ReactNode
  children: React.ReactNode
  fullWidth?: boolean
  fixed?: boolean
}

export const Table = (props: TableProps): React.ReactElement => {
  const { bordered, caption, children, fullWidth, fixed } = props

  const classes = classnames('usa-table', {
    'usa-table--borderless': !bordered,
    [`${styles.fullwidth}`]: fullWidth,
    [`${styles.fixed}`]: fixed,
  })

  return (
    <table className={classes} data-testid="table">
      {caption && <caption>{caption}</caption>}
      {children}
    </table>
  )
}

export default Table

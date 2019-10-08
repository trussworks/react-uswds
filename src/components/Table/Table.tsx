import React from 'react'
import classnames from 'classnames'

interface TableProps {
  bordered?: boolean
  caption?: React.ReactNode
  children: React.ReactNode
}

export const Table = (props: TableProps): React.ReactElement => {
  const { bordered, caption, children } = props

  const classes = classnames('usa-table', {
    'usa-table--borderless': !bordered,
  })

  return (
    <table className={classes} data-testid="table">
      {caption && <caption>{caption}</caption>}
      {children}
    </table>
  )
}

export default Table

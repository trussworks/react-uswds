import React, { forwardRef } from 'react'

import TableBase, { BaseTableBaseProps } from '../TableBase/TableBase'
import TableContainer, {
  BaseTableContainerProps,
} from '../TableContainer/TableContainer'

export interface BaseTableProps
  extends BaseTableBaseProps,
    BaseTableContainerProps {
  /**
   * @deprecated Use `isScrollable` instead
   */
  scrollable?: boolean
  caption?: React.ReactNode
}

export type TableProps = React.ComponentPropsWithRef<typeof Table>

export type TableRef = React.ComponentRef<typeof Table>

export const TableForwardRef: React.ForwardRefRenderFunction<
  HTMLTableElement,
  BaseTableProps & React.ComponentPropsWithoutRef<'table'>
> = (
  { caption, children, scrollable, isScrollable = scrollable, ...props },
  ref
): React.ReactElement => {
  const table = (
    <TableBase ref={ref} {...props}>
      {caption && <caption>{caption}</caption>}
      {children}
    </TableBase>
  )

  return (
    <>
      {isScrollable ? (
        <TableContainer isScrollable={isScrollable}>{table}</TableContainer>
      ) : (
        table
      )}
    </>
  )
}

const Table = forwardRef(TableForwardRef)

export default Table

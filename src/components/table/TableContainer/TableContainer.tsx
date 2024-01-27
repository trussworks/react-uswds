import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseTableContainerProps = {
  isScrollable?: boolean
}

export type TableContainerProps = React.ComponentPropsWithRef<
  typeof TableContainer
>

export type TableContainerRef = React.ComponentRef<typeof TableContainer>

export const TableContainerForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseTableContainerProps & React.ComponentPropsWithoutRef<'div'>
> = ({ className, isScrollable, ...props }, ref): React.ReactElement => {
  const classes = classnames(
    isScrollable && 'usa-table-container--scrollable',
    className
  )

  return (
    <div
      ref={ref}
      data-testid="scrollable-table-container"
      className={classes}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      {...props}
    />
  )
}
/**
 * From https://designsystem.digital.gov/components/table/#scrollable-table-2:
 * Scrollable tables need to be focusable. When you use the
 * .usa-table-container--scrollable variant with a table, you must add the
 * tabindex="0" attribute to the scrollable element. This attribute assures
 * that users navigating with a keyboard are able to select and scroll the
 * table. tabindex="0" enables focus on elements that do not get focus by
 * default. This attribute does not change the tab order. It places the
 * element in the logical navigation flow.
 */
const TableContainer = forwardRef(TableContainerForwardRef)

export default TableContainer

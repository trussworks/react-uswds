import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseTagProps = {
  /**
   * @deprecated Use the `style` property directly
   */
  background?: string
}

export type TagProps = React.ComponentPropsWithRef<typeof Tag>

export type TagRef = React.ComponentRef<typeof Tag>

export const TagForwardRef: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  BaseTagProps & React.ComponentPropsWithoutRef<'span'>
> = (
  { children, background, className, style = { background }, ...props },
  ref
): React.ReactElement => {
  const classes = classnames('usa-tag', className)

  return (
    <span
      ref={ref}
      data-testid="tag"
      className={classes}
      style={{ ...style }}
      {...props}>
      {children}
    </span>
  )
}

const Tag = forwardRef(TagForwardRef)

export default Tag

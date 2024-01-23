import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseTagProps = {
  background?: string
}

export type TagProps = BaseTagProps & JSX.IntrinsicElements['span']

export const TagForwardRef: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = ({
  children,
  background,
  className,
  ...spanProps
}, ref): React.ReactElement => {
  const style: React.CSSProperties = {}
  if (background) {
    style.background = background
  }

  const tagClasses = classnames('usa-tag', className)

  return (
    <span
      ref={ref}
      data-testid="tag"
      className={tagClasses}
      style={{ ...style }}
      {...spanProps}>
      {children}
    </span>
  )
}

export const Tag = forwardRef(TagForwardRef)

export default Tag

import React, { type JSX } from 'react'
import classnames from 'classnames'

export type TagProps = {
  children: React.ReactNode
  background?: string
} & JSX.IntrinsicElements['span']

export const Tag = ({
  children,
  background,
  className,
  ...spanProps
}: TagProps): JSX.Element => {
  const style: React.CSSProperties = {}
  if (background) {
    style.background = background
  }

  const tagClasses = classnames('usa-tag', className)

  return (
    <span
      data-testid="tag"
      className={tagClasses}
      style={{ ...style }}
      {...spanProps}>
      {children}
    </span>
  )
}

export default Tag

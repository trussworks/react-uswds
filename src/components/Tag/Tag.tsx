import React from 'react'
import classnames from 'classnames'

interface TagProps {
  children: React.ReactNode
  background?: string
}

export const Tag = (
  props: TagProps & JSX.IntrinsicElements['span']
): React.ReactElement => {
  const { children, background, className, ...spanProps } = props

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

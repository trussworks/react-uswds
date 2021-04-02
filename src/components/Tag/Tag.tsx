import React from 'react'
import classnames from 'classnames'

interface TagProps {
  children: React.ReactNode
  background?: string
}

export const Tag = ({
  children,
  background,
  className,
  ...spanProps
}: TagProps & JSX.IntrinsicElements['span']): React.ReactElement => {
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

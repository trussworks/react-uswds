import React from 'react'
import classnames from 'classnames'

export type TagProps = {
  children: React.ReactNode
  background?: string
} & JSX.IntrinsicElements['span']

const Tag = ({
  children,
  background,
  className,
  ...spanProps
}: TagProps): React.ReactElement => {
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

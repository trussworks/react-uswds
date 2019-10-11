import React from 'react'

interface TagProps {
  children: React.ReactNode
  background?: string
}

export const Tag = (props: TagProps): React.ReactElement => {
  const { children, background } = props

  const style: React.CSSProperties = {}
  if (background) {
    style.background = background
  }

  return (
    <span data-testid="tag" className="usa-tag" style={{ ...style }}>
      {children}
    </span>
  )
}

export default Tag

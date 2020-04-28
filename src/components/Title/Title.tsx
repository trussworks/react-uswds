import React from 'react'
import classnames from 'classnames'

interface TitleProps {
  children: React.ReactNode
  className?: string
}

export const Title = ({
  className,
  children,
  ...props
}: TitleProps): React.ReactElement => {
  const classes = classnames('usa-logo', className)

  return (
    <div className={classes} {...props}>
      <em className="usa-logo__text">{children}</em>
    </div>
  )
}

export default Title

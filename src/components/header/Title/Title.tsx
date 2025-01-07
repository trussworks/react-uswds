import React, { JSX } from 'react'
import classnames from 'classnames'

type TitleProps = {
  children: React.ReactNode
}

export const Title = ({
  className,
  children,
  ...divProps
}: TitleProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-logo', className)

  return (
    <div className={classes} {...divProps}>
      <em className="usa-logo__text">{children}</em>
    </div>
  )
}

export default Title

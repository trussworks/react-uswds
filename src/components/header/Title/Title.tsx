import React from 'react'
import classnames from 'classnames'

export type TitleProps = JSX.IntrinsicElements['div']

export const Title = ({
  className,
  children,
  ...divProps
}: TitleProps): React.ReactElement => {
  const classes = classnames('usa-logo', className)

  return (
    <div className={classes} {...divProps}>
      <em className="usa-logo__text">{children}</em>
    </div>
  )
}

export default Title

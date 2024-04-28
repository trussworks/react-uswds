import React from 'react'
import classnames from 'classnames'

export interface BaseTitleProps {
  children: React.ReactNode
}

export type TitleProps = BaseTitleProps & JSX.IntrinsicElements['div']

const Title = ({
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

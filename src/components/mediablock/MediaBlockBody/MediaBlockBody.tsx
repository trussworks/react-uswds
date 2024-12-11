import { JSX } from 'react'
import classNames from 'classnames'

export const MediaBlockBody = ({
  children,
  className,
  ...divProps
}: JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classNames('usa-media-block__body', className)

  return (
    <div className={classes} {...divProps}>
      {children}
    </div>
  )
}
